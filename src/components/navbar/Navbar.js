import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export const Navbar = ({ getCategories, categories }) => {

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <nav className="navbar">
            {categories.length ?
                <div className="menu">
                    {categories.map((category) => {
                        return (
                            <ul className="navLinks" key={category.id}>
                                <li><NavLink to={`/${category.id}`}  > {category.name} </NavLink></li>
                            </ul>
                        )
                    })
                    }
                </div>
                : ''
            }
        </nav>
    );
}