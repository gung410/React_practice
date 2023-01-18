import React, { Component } from "react";

class Ref_9 extends Component {
    constructor(props) {
        super(props);
        this.getVal = this.getVal.bind(this);
    }
    getVal() {
        console.log(this.refs.name.value)
    }
    render() {
        return (
            <div style={{width: 20 + 'em' ,marginLeft: 25 + 'em' , border: 10 + 'em'}}>
                <br />
                <div>Bài 9 : Ref</div>
                <span className="label label-info">Info</span>
                    <div className="form-inline" >
                        <div className="form-group">
                            <label className="sr-only">label</label>
                            <input type="email" className="form-control" ref="name" />
                        </div>
                        <br/>
                        <button  className="btn btn-primary" onClick={() => this.getVal()}>Submit</button>
                    </div>
            </div>
        );
    }
}

export default Ref_9;
