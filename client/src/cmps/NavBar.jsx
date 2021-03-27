import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from 'react-router-dom'

function _NavBar() {
  const pageName = useSelector(state => state.pageReducer.pageName);
  const dispatch = useDispatch();

  useEffect(() => {
 
  }, []);

  return (
    <div className="nav-bar ca">
      <NavLink to="/">
        <h1>The Wall</h1>
      </NavLink>

      <div className={(pageName === '1' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/">
          <p className="nav-btn">Wall</p>
        </NavLink>
      </div>

      <div className={(pageName === '2' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/create">
          <p className="nav-btn">Create</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export const NavBar = _NavBar
