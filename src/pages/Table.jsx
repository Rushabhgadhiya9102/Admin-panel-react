import React from "react";
import Header from "../components/Header";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { TbShoppingCartCopy } from "react-icons/tb";

const Table = (props) => {
  const { productData, handleDelete, handleEdit, handleOrder } = props;
  return (
    <>
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="fw-bold mb-3">Tables</h3>
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
                  <a href="#">Tables</a>
                </li>
                <li className="separator">
                  <i className="icon-arrow-right" />
                </li>
                <li className="nav-item">
                  <a href="#">Basic Tables</a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card p-3">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stocks</th>
                        <th>Ware House</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.map((val, index) => {

                        const { image, productname, description, productprice, stock, warehouse, id } = val
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <img src={image?.url} className="img-fluid" alt={productname} style={{ width: "50px", height: "50px" }} />
                            </td>
                            <td>{productname}</td>
                            <td>{description}</td>
                            <td>$ {productprice}</td>
                            <td>{stock}</td>
                            <td>{warehouse.toString('')}</td>
                            <td className="d-flex gap-2">
                              <button className="btn btn-outline-danger my-2" onClick={() => handleDelete(id)}><FaTrash /></button>
                              <button className="btn btn-outline-warning my-2" onClick={() => handleEdit(id)}><FaPencilAlt /></button>
                              <button className="btn btn-outline-info my-2" onClick={() => handleOrder(id)}><TbShoppingCartCopy /></button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
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

export default Table;
