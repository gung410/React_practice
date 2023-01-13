import React from "react";
import Product_7 from '../layout/Product_7'

function Prop_7() {
    const listProduct = [
    {
        name: "iphone - 14",
        price: "10000"
    },
    {
        name: "iphone - 15",
        price: "10000"
    },
    {
        name: "iphone - 16",
        price: "10000"
    }
]
    const getItem = listProduct.map((item,index) => {
        return (
            <Product_7 name = {item.name} price = {item.price} key = {index}/>
        )
    })
    return (
        <div>
            <div>_______________7. Props_______________</div>
            {getItem}
        </div>
    )
}

export default Prop_7;