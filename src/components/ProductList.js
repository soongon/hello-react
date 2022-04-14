import { useState } from "react";

function ProductList() {

    const [products, setProducts] = 
                useState(['아이폰13', '갤럭시', '모니터27']);

    return (
        <>
            <p>
                <button>get data</button>
            </p>
            <ul>
                <li>{products[0]}</li>
                <li>{products[1]}</li>
                <li>{products[2]}</li>
            </ul>
        </>
    );
}

export default ProductList;