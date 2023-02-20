import React, { Component } from "react";
import "../assets/scss/_SettingColor_11.scss";

class SettingColor extends Component {
    render() {
        return (
            <div className="container_11">
                <div className="container_btn">
                    <div className="box_left">
                        <div>Color picker</div>
                        <div className="box">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                            <div className="four"></div>
                        </div>
                    </div>
                    <div className="box_right">
                        <h3>Size : 12px</h3>
                        <button className="btn">Tăng</button>
                        <button className="btn">Giam</button>
                    </div>
                </div>
                <div className="container_content">
                    <h3> Color : red , font-size : 13px</h3>
                    <div className="content">
                        Nội dung setting 
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingColor;