import React, { useEffect, useState } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fonts.min.css";
import "./assets/css/kaiadmin.min.css";
import "./assets/css/plugins.min.css";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Table from "./pages/Table";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";

const App = () => {
  
  // --------- S T A T E - H A N D L E - S T A R T ----------

  const [product, setProduct] = useState({});
  const [productData, setProductData] = useState([]);
  const [warehouse, setWarehouse] = useState([]);

   // --------- S T A T E - H A N D L E - E N D -----------

   // --------- L O C A L - S T O R A G E - S T A R T ------------

    useEffect(()=>{

    const storedData = JSON.parse(localStorage.getItem("productData")) || []
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

    const newData = [...productData, { ...product, id: Date.now() }];
    setProductData(newData);

    console.log(newData);
    setProduct({});
    setWarehouse([]);
  };

  // ---------- H A N D L E - S U B M I T - E N D -----------


  // ---------- H A N D L E - C A N C E L - S T A R T -----------

  const handleCancel = () =>{

    setProduct({});
    setWarehouse([]);

  }
  // ---------- H A N D L E - C A N C E L - E N D -----------

  // ---------- H A N D L E - D E L E T E -------------

  const handleDelete = (id) => {
    let removeData = productData.filter((val) => val.id !== id);
    setProductData(removeData);
  };

  return (
    <>
      <Router>
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Form"
            element={
              <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                product={product}
                warehouse={warehouse}
              />
            }
          />
          <Route
            path="/Table"
            element={
              <Table
                productData={productData}
                handleDelete={handleDelete}
                // id={id}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
