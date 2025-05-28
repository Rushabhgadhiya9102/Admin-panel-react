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
  
  // --------- S T A T E - H A N D L E - S T A R T ----------

  const [product, setProduct] = useState({});
  const [productData, setProductData] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [order, setOrder] = useState([])
  const [editId, setEditId] = useState(null)
  const [error,setError] = useState({})

   // --------- S T A T E - H A N D L E - E N D -----------

   // --------- R E F R E N C E S - S T A T E - H A N D L E - S T A R T -------------

   const navigate = useNavigate()
   const inputRef = useRef()

   // --------- R E F R E N C E S - S T A T E - H A N D L E - E N D -------------

   // --------- L O C A L - S T O R A G E - S T A R T ------------

    useEffect(()=>{

    let storedData = JSON.parse(localStorage.getItem("productData")) || []
    setProductData(storedData)

    },[])

   // --------- L O C A L - S T O R A G E - E N D ------------

  // --------- H A N D L E - C H A N G E - S T A R T -----------

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

    if(files){

      const selectFile = files[0]

      if(selectFile.size > 5242880){
          alert("File should be less than 5mb")
      }

      const reader = new FileReader()
  
      reader.onloadend = () =>{
  
        const fileObj = {
          type : selectFile.type,
          name: selectFile.name,
          url : reader.result
        };
  
        setProduct((prev) => ({ ...prev, [name]: fileObj }))
      };
  
      reader.readAsDataURL(selectFile)

    }else{

      setProduct((prev) => ({ ...prev, [name]: value }))
    }
    
  };

  // --------- H A N D L E - C H A N G E - E N D ----------


  // ---------- H A N D L E - S U B M I T - S T A R T -----------

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!handleValidation()) return

    // --------- EDIT SECTION ----------

    if(editId === null){

      const newData = [...productData, { ...product, id: Date.now() }];
      setProductData(newData);
      localStorage.setItem("productData", JSON.stringify(newData))

    }else{

      let data = productData.map((val)=>{

        if(val.id === editId){
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

  // ---------- H A N D L E - S U B M I T - E N D -----------


  // ---------- H A N D L E - C A N C E L - S T A R T -----------

  const handleCancel = () =>{

    setProduct({});
    setWarehouse([]);

  }
  // ---------- H A N D L E - C A N C E L - E N D -----------

  // ---------- H A N D L E - D E L E T E - S T A R T -------------

  const handleDelete = (id) => {

    let removeData = productData.filter((val) => val.id !== id);
    setProductData(removeData);
    localStorage.setItem("productData", JSON.stringify(removeData))

  };

  // ---------- H A N D L E - D E L E T E - E N D -------------

  // ---------- H A N D L E - E D I T - S T A R T -------------

    const handleEdit = (id) =>{

      let editData = productData.filter((val) => val.id === id)[0]

      if(editData){

        setProduct(editData)
        setWarehouse(editData.warehouse || [])
        setEditId(id)

      }

      navigate('/Form')

    }

  // ---------- H A N D L E - E D I T - E N D -------------

  // ---------- H A N D L E - V A L I D A T I O N - S T A R T -------------

    const handleValidation = ()=>{

      let errors = {}
      
      if(!product.productname)errors.productname = "Product name is required"
      if(!product.productprice)errors.productprice = "Product price is required"
      if(!product.stock)errors.stock = "Product stock is required"
      if(!product.description)errors.description = "Product description is required"
      if(!product.warehouse)errors.warehouse = "Product warehouse is required"

      setError(errors)
      return Object.keys(errors).length === 0

    }

  // ---------- H A N D L E - V A L I D A T I O N - E N D -------------

  // ---------- handle - order - start ------------

    const handleOrder = (id)=>{

      const selectedProduct = productData.find((item) => item.id === id)
      
      const orderData = [...order, selectedProduct]
      setOrder(orderData)

      console.log(orderData)
    }

  // ---------- handle - order - end ------------

  return (
    <>
      
        <Aside />
        <Routes>
          <Route path="/" element={<Home productData={productData} order={order} />} />
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
                handleEdit = {handleEdit}
                handleOrder={handleOrder}
              />
            }
          />
        </Routes>
     
    </>
  );
};

export default App;
