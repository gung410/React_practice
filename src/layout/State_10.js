import React, { Component } from "react";

class StateTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product : [
                {
                    name: "IPHONE S1",
                    price: 100000
                },
                {
                    name: "IPHONE S2",
                    price: 100000
                },
                {
                    name: "IPHONE S3",
                    price: 100000
                },
            ]

        }
        this.isCheck = {
            isState : true
        }
    // this.onState = this.onState.bind(this);
    }

    onState = () => {
        this.setState((pre) => ({isState : !pre.isState}));
        console.log(this.state.isState)
    }

    render() {
        let product = this.state.product.map((prod) => {
            let result = ''
            console.log(prod)
            if (prod) {
                result = <tr>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Buy</button>
                    </td>
                </tr>
            }
            return result;
        })
        return (
            <div>
                <div> Bài 10 : State </div>
                <div style={{ width: 20 + 'em', marginLeft: 25 + 'em', border: 10 + 'em' }}>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product}
                        </tbody>
                    </table>
                </div>
                <button  type="button" className="btn btn-primary" onClick={this.onState}>
                    Change state : {this.state.isState ? 'true' : 'false'}
                </button>
            </div>
        )
    }
}
export default StateTest;