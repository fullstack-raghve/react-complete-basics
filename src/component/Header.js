import React from 'react'
import './Header.css'
import { Link, NavLink } from "react-router-dom";
export const Header = () => {
    return (
        <div>
            <div className="topnav">
               
                <NavLink  exact to="/">Home</NavLink>
                <NavLink  exact to="/users">Users</NavLink>
                <NavLink  exact to="/books">Books</NavLink>
                <NavLink  exact to="/common">useSate</NavLink>
                <NavLink  exact to="/portals">reactPortal</NavLink>
                <NavLink  exact to="/useref">useref</NavLink>
                <NavLink  exact to="/forwardref">forwardref</NavLink>
                <NavLink  exact to="/usereducer">usereducer</NavLink>
                <NavLink  exact to="/customhook">customhook</NavLink>
                <NavLink  exact to="/usecontext">use context</NavLink>
                <NavLink  exact to="/context">use context 2</NavLink>
                <NavLink  exact to="/callback">use callback</NavLink>
                <NavLink  exact to="/quiz">Quiz</NavLink>

                
            </div>
        </div>
    )
}