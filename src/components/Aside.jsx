import React from "react";
import { FaFileSignature, FaHome, FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";

const Aside = () => {

  return (
    <>
      <div className="sidebar"  data-background-color="dark">
        <div className="sidebar-logo">
          {/* Logo Header */}
          <div className="logo-header" data-background-color="dark">
            <a href="index.html" className="logo">
              <img
                src="assets/img/kaiadmin/logo_light.svg"
                alt="navbar brand"
                className="navbar-brand"
                height={20}
              />
            </a>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right" />
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left" />
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt" />
            </button>
          </div>
          {/* End Logo Header */}
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <Link
                  to="/"
                >
                  <FaHome size={20}/>
                  <p className="ms-3">Dashboard</p>
                </Link>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h" />
                </span>
                <h4 className="text-section">Components</h4>
              </li>
              <li className="nav-item">
                <Link to="/Form">
                  <FaFileSignature size={15} />
                  <p className="ms-3">Forms</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Table">
                  <FaTable size={15} />
                  <p className="ms-3">Tables</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
