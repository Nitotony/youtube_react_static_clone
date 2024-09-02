import React from "react";
import logo from "../assets/pngwing.com.png"
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import "./horizontal_menu.css"
const Horizontal_menu=()=>{
    return (
      <div className="horizontal_menu">
        <div className="horizontal_menu_body">
          <div className="threelined_menu"><IoMenu/></div>
          <div className="logo_img">
            <img src={logo} alt="" />
          </div>
          <div className="search_component">
            <input type="text" placeholder="Search" />
            <button>
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Horizontal_menu;