import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const options = {
    edit: false,
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 2.5,
    isHalf: true
}

const Product = ({product}) => {
    return (
        <Link className='productCard ' to={product._id}>
            <div className=' p-4 m-auto w-full hover:border hover:-translate-y-1 transition duration-150 border-black border-opacity-20 w-content inline-block'>
            <img className='h-60 w-60 ' src="https://cdn.pixabay.com/photo/2020/06/07/02/16/fantasy-5268744_960_720.jpg" alt="product"  />
            <p className='capitalize text-black'>{product.name}</p>
            <div>
                <ReactStars {...options} /> <span>(256 reviews)</span>
            </div>
            <span>${product.price}</span>
            </div>
            </Link>
    )
}

export default Product