import React from "react";
import Header from "../components/Header";

const Form = (props) => {
  const { handleChange, handleSubmit, product, warehouse } = props;

  return (
    <>
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="fw-bold mb-3">Forms</h3>
              <ul className="breadcrumbs mb-3">
                <li className="nav-home">
                  <a href="#">
                    <i className="icon-home" />
                  </a>
                </li>
                <li className="separator">
                  <i className="icon-arrow-right" />
                </li>
                <li className="nav-item">
                  <a href="#">Forms</a>
                </li>
                <li className="separator">
                  <i className="icon-arrow-right" />
                </li>
                <li className="nav-item">
                  <a href="#">Basic Form</a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form
                  method="post"
                  onSubmit={handleSubmit}
                  className="bg-white p-5 rounded-4 shadow"
                >
                  <div className="card-header">
                    <div className="card-title">Form Elements</div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                          <label htmlFor="name">Product Name:</label>
                          <input
                            type="text"
                            name="productname"
                            value={product.productname || ""}
                            onChange={handleChange}
                            className="form-control"
                            id="name"
                            placeholder="Enter Product Name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="price">Product Price</label>
                          <input
                            type="Number"
                            name="productprice"
                            value={product.productprice || ""}
                            onChange={handleChange}
                            className="form-control"
                            id="price"
                            placeholder="Product Price"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="name">Product Stock:</label>
                          <input
                            type="number"
                            name="stock"
                            value={product.stock || ""}
                            onChange={handleChange}
                            className="form-control"
                            id="name"
                            placeholder="Enter Stock"
                          />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="exampleFormControlFile1"
                            className="form-label"
                          >
                            Example file input
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="exampleFormControlFile1"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="comment" className="form-label">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            onChange={handleChange}
                            name="description"
                            value={product.description || ""}
                            id="description"
                            rows={5}
                          />
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            name="warehouse"
                            value="Surat"
                            onChange={handleChange}
                            checked={warehouse.includes("Surat") ? true : false}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Surat
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            name="warehouse"
                            value="Navsari"
                            onChange={handleChange}
                            checked={warehouse.includes("Navsari") ? true : false}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Navsari
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            name="warehouse"
                            value="Daman"
                            onChange={handleChange}
                            checked={warehouse.includes("Daman") ? true : false}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Daman
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-action">
                    <button className="btn btn-success mx-3">Submit</button>
                    <button className="btn btn-danger">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid d-flex justify-content-between">
            <nav className="pull-left">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="http://www.themekita.com">
                    ThemeKita
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Help{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Licenses{" "}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright">
              {new Date().getFullYear()}, made with <i className="fa fa-heart heart text-danger" /> by
              <a href="http://www.themekita.com">ThemeKita</a>
            </div>
            <div>
              Distributed by
              <a target="_blank" href="https://themewagon.com/">
                ThemeWagon
              </a>
              .
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Form;
