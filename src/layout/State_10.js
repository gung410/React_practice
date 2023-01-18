import React, { Component } from "react";

class StateTest extends Component {
    constructor(props) {
        super(props)
        this.state = [
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
    render() {
        let product = this.state.map((prod) => {
            let result = ''
            if (this.state) {
                result = <tr>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Buy</button>
                    </td>
                </tr>
            }
            console.log(result)
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
            </div>
        )
    }
}
export default StateTest;