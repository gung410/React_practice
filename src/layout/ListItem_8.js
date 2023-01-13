import React from "react";

function ListItem_8() {
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
        }]
    const getList = listProduct.map((item , index) => {return(
        <div class="row">
            <div class="container">                   
                    <div class="row">
                        <div class="row">
                
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    name : {item.name}
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    price : {item.price}
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* <button type="button" class="btn btn-primary" onClick={this.addMoreItem()}>submit</button>   */}
                </div>                
                    </div>                                      
                        </div>                                      
            </div>
        </div>   
        ) 
    })
    return(
        <div>
            {getList}
        </div>
    )
}
export default ListItem_8;