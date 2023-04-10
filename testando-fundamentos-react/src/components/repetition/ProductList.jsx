import React from 'react';
import products from '../../data/products';

export default props => {
    const productList = products.map(product => {
        return <tr key={product.id}>
            <td> {product.id} </td>
            <td> {product.name} </td>
            <td> {product.price} </td>
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