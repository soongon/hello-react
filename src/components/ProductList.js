import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        buttonClicked();
    });

    function buttonClicked() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            });
    }
    
    return (
        <>
            <p>
                <button onClick={buttonClicked}>get data</button>
            </p>
            <ul>
                {
                    products.map(item => 
                        <li key={item.id}>
                            <p>글번호: {item.id}</p>
                            <p>{item.title}</p>
                        </li>
                    )
                }
            </ul>
        </>
    );
}

export default ProductList;