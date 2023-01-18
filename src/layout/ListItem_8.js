import React, { Component } from "react";
const handleE = (txt) => {
    console.log(txt)
}
class ListItem_8 extends Component {
    constructor(props) {
        super(props)
        this.onHandle3 = this.onHandle3.bind(this)
    }
    onHandle3() {
        console.log(this.props.name); // chỉ dùng khi muốn truyền param
    }
    render() {
            return(
    <div>
        <div className="row" key={this.props.id}>
            <div className="container">                   
                    <div className="row">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                name : {this.props.name}
                                </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                price : {this.props.price}
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {<button type="button" className="btn btn-primary" onClick={() => handleE(this.props.name)}>submit </button>}
                            <br/>           
                            <br/>           
                             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {<button type="button" className="btn btn-primary" onClick={this.onHandle3} > test cách 3 </button>}
                                </div>   
                        </div>                
                    </div>                                      
                </div>                                      
            </div>
        </div>           
    </div>
    )
    }
}
export default ListItem_8;