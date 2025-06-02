import React from "react";
import Header from "../components/Header";
import { LineChart } from "@mui/x-charts";

const Home = (props) => {
  const { productData, order, count, seriesData, xAxisData } = props;

  console.log(count)
  return (
    <>
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
              <div>
                <h3 className="fw-bold mb-3">Dashboard</h3>
              </div>
              <div className="ms-md-auto py-2 py-md-0">
                <a href="#" className="btn btn-label-info btn-round me-2">
                  Manage
                </a>
                <a href="#" className="btn btn-primary btn-round">
                  Add Customer
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-primary bubble-shadow-small">
                          <i className="fas fa-users" />
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Visitors</p>
                          <h4 className="card-title">1,294</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-info bubble-shadow-small">
                          <i className="fas fa-user-check" />
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Subscribers</p>
                          <h4 className="card-title">1303</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-success bubble-shadow-small">
                          <i className="fas fa-luggage-cart" />
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Sales</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div className="icon-big text-center icon-secondary bubble-shadow-small">
                          <i className="far fa-check-circle" />
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Order</p>
                          <h4 className="card-title">{count}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="card card-round">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">User Statistics</div>
                      <div className="card-tools">
                        <a
                          href="#"
                          className="btn btn-label-success btn-round btn-sm me-2"
                        >
                          <span className="btn-label">
                            <i className="fa fa-pencil" />
                          </span>
                          Export
                        </a>
                        <a
                          href="#"
                          className="btn btn-label-info btn-round btn-sm"
                        >
                          <span className="btn-label">
                            <i className="fa fa-print" />
                          </span>
                          Print
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div
                      className="chart-container"
                      style={{ height: "315px" }}
                    >
                      <LineChart
                        xAxis={[{ data: xAxisData }]}
                        series={[
                          {
                            data: seriesData,
                            area: true,
                          },
                        ]}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-primary card-round">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">Daily Sales</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-label-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Export
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-category">March 25 - April 02</div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="mb-4 mt-2">
                      <h1>$4,578.58</h1>
                    </div>
                    <div className="pull-in"></div>
                  </div>
                </div>
                <div className="card card-round">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-primary">+5%</div>
                    <h2 className="mb-2">17</h2>
                    <p className="text-muted">Users online</p>
                    <div className="pull-in sparkline-fix">
                      <LineChart
                        xAxis={[{ data: xAxisData }]}
                        series={[
                          {
                            data: seriesData,
                          },
                        ]}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="card card-round overflow-y-scroll"
                  style={{ height: "500px" }}
                >
                  <div className="card-header">
                    <div className="card-head-row card-tools-still-right">
                      <h4 className="card-title">Product Overview</h4>
                      <div className="card-tools">
                        <button className="btn btn-icon btn-link btn-primary btn-xs">
                          <span className="fa fa-angle-down" />
                        </button>
                        <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                          <span className="fa fa-sync-alt" />
                        </button>
                        <button className="btn btn-icon btn-link btn-primary btn-xs">
                          <span className="fa fa-times" />
                        </button>
                      </div>
                    </div>
                    <p className="card-category"></p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive  table-hover table-sales">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Images</th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Stocks</th>
                                <th>Ware House</th>
                              </tr>
                            </thead>
                            <tbody>
                              {productData.map((val, index) => {
                                const {
                                  image,
                                  productname,
                                  description,
                                  productprice,
                                  stock,
                                  warehouse,
                                } = val;
                                return (
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                      <img
                                        src={image?.url}
                                        className="img-fluid"
                                        alt={productname}
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                        }}
                                      />
                                    </td>
                                    <td>{productname}</td>
                                    <td>{description}</td>
                                    <td>${productprice}</td>
                                    <td>{stock}</td>
                                    <td>{warehouse.toString('')}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mapcontainer">
                          <div
                            id="world-map"
                            className="w-100"
                            style={{ height: 0 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-round overflow-x-scroll" style={{height:"540px"}}>
                  <div className="card-header">
                    <h4 className="card-title">Order Palced</h4>
                  </div>
                  <div className="card-body">
                    <table className="table table-responsive">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.map((val, index) => {
                          const { productname, productprice } = val;

                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{productname}</td>
                              <td>$ {productprice}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card card-round">
                  <div className="card-header">
                    <div className="card-head-row card-tools-still-right">
                      <div className="card-title">Transaction History</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-icon btn-clean me-0"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h" />
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      {/* Projects table */}
                      <table className="table align-items-center mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Payment Number</th>
                            <th scope="col" className="text-end">
                              Date &amp; Time
                            </th>
                            <th scope="col" className="text-end">
                              Amount
                            </th>
                            <th scope="col" className="text-end">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check" />
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check" />
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check" />
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check" />
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check" />
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check" />
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                                <i className="fa fa-check" />
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
              {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart text-danger" /> by
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

export default Home;
