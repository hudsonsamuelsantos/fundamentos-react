import "./ProductTable.css"
import React from "react";
import products from '../../data/products';

export default props => {

    function getLines() {
        return products.map(product => {

            return (
                <tr 
                    className={product.id % 2 === 0 ? "light" : "dark"}
                    key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R${product.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            );
        });
    }

    return (
        <div className="ProductTable">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    )
}