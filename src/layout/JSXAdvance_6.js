import React from "react";

function showInfoProduct(product2) {
    return (
    <div>
        <p> name : {product2.name}</p> <br/>
        <p> price : {product2.price}</p> <br/>
        <p> status : {product2.status}</p> <br/>
    </div>
    )
};

function Ep6_JsxAdvance() {
    const user = [{id:1 , name : "iphone 1" , price: 200000 , status: true}, 
    {id:2 , name : "iphone 2" , price: 200000 , status: true}, 
    {id:3 , name : "iphone 3" , price: 200000 , status: true}]

const product = {id:1 , name : "iphone" , price: 100000 , status: true}
const product2 = {id:2 , name : "iphone 2" , price: 200000 , status: true}
const product3 = user.map((item,index) => {return(
<div key={index}>
            <p> name : {item.name}</p> <br/>
            <p> price : {item.price}</p> <br/>
            <p> status : {item.status}</p> <br/>
</div>
)})
    return(
        <div>
                <div>_______________6. Lập Trình ReactJS : JSX Mở Rộng_______________</div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <h3>info</h3>
                        <div>
                            <p> name : {product.name}</p> <br/>
                            <p> price : {product.price}</p> <br/>
                            <p> status : {product.status}</p> <br/>
                        </div>
                        <h3>info 2 using function</h3>
                        <div>
                           { showInfoProduct(product2)}
                        </div>
                        <h3>info 3 using expresion function</h3>
                        {product3}
                    </div>
        </div>
    )
}
export default Ep6_JsxAdvance;