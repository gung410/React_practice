import React, { Component } from "react";
import ListItem_8 from "./ListItem_8";


// function addMoreItem() {
//     console.log();
// }

class HandleEvent_8 extends Component {
    onHandle1() {
        console.log('cach 1'); // chỉ dùng khi không truyền tham số vào hoặc muốn nó chạy ngay từ đâu khi load DOM
    }

    onHandle2(txt) {
        console.log(txt); // chỉ dùng khi muốn truyền param
    }
    
    render() {
        const listProduct = [
            {
                id:1,
                name: "iphone - 14",
                price: "10000"
            },
            {
                id:2,
                name: "iphone - 15",
                price: "10000"
            },
            {
                id:3,
                name: "iphone - 16",
                price: "10000"
            }]
        const getList = listProduct.map((item , index) => {return(
            <ListItem_8  key={item.id} name= {item.name} price = { item.price}/>
            ) 
        })
        return(
            <div>
                <h3>Bài 8 xử lý sự kiện</h3>   
                <br/>
                {getList}
                <br/>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {<button type="button" className="btn btn-primary" onClick={this.onHandle1} >cách 1 </button>}
                </div>    
                <br/>           
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {<button type="button" className="btn btn-primary" onClick={() => this.onHandle2('cách 2 ')} >cách 2 </button>}
                </div>                           
            </div>
        )

    }
}

export default HandleEvent_8;