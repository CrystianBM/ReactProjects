import React from 'react';
import products from '../../data/products';
import "./ProductList.css";

export default props => {
    const productList = products.map(product => {
        return <tr key={product.id} className={product.id % 2 === 0 ? "par" : "impar"}>
            <td> {product.id} </td>
            <td> {product.name} </td>
            <td> ${product.price.toFixed(2).replace('.', ',')} </td>
        </tr>
    })
    
    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Value</th>
            </tr>
            {productList}
        </table>
    )
}