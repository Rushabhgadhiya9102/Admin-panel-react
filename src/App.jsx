import React, { useEffect, useRef, useState } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fonts.min.css";
import "./assets/css/kaiadmin.min.css";
import "./assets/css/plugins.min.css";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Table from "./pages/Table";
import { Route, Routes, useNavigate } from "react-router-dom";
import Aside from "./components/Aside";

const App = () => {

  // --------- S T A T E - H A N D L E ----------

  const [product, setProduct] = useState({});
  const [productData, setProductData] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [order, setOrder] = useState([])
  const [editId, setEditId] = useState(null)
  const [error, setError] = useState({})
  const [count, setCount] = useState(0)

  // --------- R E F R E N C E S - S T A T E -------------

  const navigate = useNavigate()
  const inputRef = useRef()

  // --------- L O C A L - S T O R A G E  ------------

  useEffect(() => {

    let storedData = JSON.parse(localStorage.getItem("productData")) || []
    setProductData(storedData)

    let orderData = JSON.parse(localStorage.getItem("orderData")) || []
    setOrder(orderData)
    setCount(orderData.length)

  }, [])

  // --------- H A N D L E - C H A N G E -----------

  const handleChange = (e) => {
    const { name, value, checked, files } = e.target;

    if (name === "warehouse") {
      let newWarehouse = [...warehouse];

      // --------- CHECKED --------

      if (checked) {
        newWarehouse.push(value);
      } else {
        newWarehouse = newWarehouse.filter((val) => val != value);
      }

      setWarehouse(newWarehouse);
      setProduct((prev) => ({ ...prev, warehouse: newWarehouse }));
      return;
    }

    // ----------- IMAGES -----------

    if (files) {

      const selectFile = files[0]

      if (selectFile.size > 5242880) {
        alert("File should be less than 5mb")
      }

      const reader = new FileReader()

      reader.onloadend = () => {

        const fileObj = {
          type: selectFile.type,
          name: selectFile.name,
          url: reader.result
        };

        setProduct((prev) => ({ ...prev, [name]: fileObj }))
      };

      reader.readAsDataURL(selectFile)

    } else {

      setProduct((prev) => ({ ...prev, [name]: value }))
    }

  };


  // ---------- H A N D L E - S U B M I T -----------

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!handleValidation()) return

    // --------- EDIT SECTION ----------

    if (editId === null) {

      const newData = [...productData, { ...product, id: Date.now() }];
      setProductData(newData);
      localStorage.setItem("productData", JSON.stringify(newData))

    } else {

      let data = productData.map((val) => {

        if (val.id === editId) {
          val = product
        }
        return val
      })

      localStorage.setItem("productData", JSON.stringify(data))
      setProductData(data)
      setEditId(null)

    }

    setProduct({});
    setWarehouse([]);
    inputRef.current.value = ""
    navigate('/Table')

  };


  // ---------- H A N D L E - C A N C E L -----------

  const handleCancel = () => {

    setProduct({});
    setWarehouse([]);

  }

  // ---------- H A N D L E - D E L E T E -------------

  const handleDelete = (id) => {

    let removeData = productData.filter((val) => val.id !== id);
    setProductData(removeData);
    localStorage.setItem("productData", JSON.stringify(removeData))

  };

  // ---------- H A N D L E - E D I T -------------

  const handleEdit = (id) => {

    let editData = productData.filter((val) => val.id === id)[0]

    if (editData) {

      setProduct(editData)
      setWarehouse(editData.warehouse || [])
      setEditId(id)

    }

    navigate('/Form')

  }

  // ---------- H A N D L E - V A L I D A T I O N  -------------

  const handleValidation = () => {

    let errors = {}

    if (!product.productname) errors.productname = "Product name is required"
    if (!product.productprice) errors.productprice = "Product price is required"
    if (!product.stock) errors.stock = "Product stock is required"
    if (!product.description) errors.description = "Product description is required"
    if (!product.warehouse) errors.warehouse = "Product warehouse is required"

    setError(errors)
    return Object.keys(errors).length === 0

  }

  // ---------- H A N D L E - O R D E R ------------

  const handleOrder = (id) => {

    const selectedProduct = productData.find((item) => item.id === id)

    const orderData = [...order, selectedProduct]
    setOrder(orderData)
    localStorage.setItem("orderData", JSON.stringify(orderData))
    setCount(orderData.length)

  }

  return (
    <>

      <Aside />
      <Routes>
        <Route path="/" element={<Home productData={productData} order={order} count={count} />} />
        <Route
          path="/Form"
          element={
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
              product={product}
              warehouse={warehouse}
              error={error}
              inputRef={inputRef}
            />
          }
        />
        <Route
          path="/Table"
          element={
            <Table
              productData={productData}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleOrder={handleOrder}
            />
          }
        />
      </Routes>

    </>
  );
};

export default App;
