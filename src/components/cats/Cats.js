import React, { useEffect, useState } from 'react';
import api from '../../Api'
import './cats.css';

export const Cats = ({ getCategories, categories }) => {

    const [cats, setCats] = useState([])

    function getCats() {

        let catCategoryId
        catCategoryId = window.location.pathname
        catCategoryId = catCategoryId.replace('/', '')
        api.get(`/images/search?limit=10&page=1&category_ids=${catCategoryId}`).then(data => {
            setCats(data)
        })
    }

    useEffect(() => {
        getCats()
    }, [])

    return (
        <div className="cats-container">
            {
                cats.length ?
                    <div className="cats-images">
                        {cats.map((cat, index) => {
                            return (
                                <div className="image-container" key={index}>
                                    <img src={cat.url} />
                                </div>
                            )
                        })
                        }
                    </div>
                    : ''
            }
        </div>
    );
}

