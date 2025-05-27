import React, { useState } from "react";
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

  // --------- S T A T E - H A N D L E ----------

  const [product, setProduct] = useState({});
  const [productData, setProductData] = useState([]);
  const [warehouse, setWarehouse] = useState([]);

  // --------- H A N D L E - C H A N G E -----------

  const handleChange = (e) => {

    const { name, value, checked, files } = e.target;

    if (name === "warehouse") {
      let newWarehouse = [...warehouse];

      if (checked) {
        newWarehouse.push(value);

      } else {
        newWarehouse = newWarehouse.filter((val)=> val != value)

      }

      setWarehouse(newWarehouse)
      setProduct((prev) => ({...prev , warehouse : newWarehouse }))
      return;

    }

    if(files){
      let files = files[0]
      let reader = new FileReader()

      reader.onloadend = ()=>{
        let file = {

          name: file.name,
          type: file.type,
          url: reader.result

        }

        value = file
        setProduct({...product, files})
      }
    }

    const newData = { ...product, [name]: value };
    setProduct(newData);
  };

  // ---------- H A N D L E - S U B M I T -----------

  const handleSubmit = (e) => {

    e.preventDefault();

    const newData = [...productData, { ...product, id: Date.now() }];
    setProductData(newData);

    console.log(newData);
    setProduct({});
    setWarehouse([])
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
                product={product}
                warehouse={warehouse}
              />
            }
          />
          <Route path="/Table" element={<Table productData={productData} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
