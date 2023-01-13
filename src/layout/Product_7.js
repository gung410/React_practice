import React, {Component}  from "react";
class Product_7 extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.price}</p>
                    </div>
                </div>
            </div>
        )
    }

}
// function Product_7() {
//     return (
//             <div className="card">
//                 <div className="card-body">
//                     <h4 className="card-title"> Product </h4>
//                     <p className="card-text">{this.props.name} </p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">{this.props.price}</li>
//                 </ul>
//             </div>
//     )
// }

export default Product_7;