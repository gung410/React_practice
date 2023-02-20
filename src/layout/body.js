import {React} from "react";
import HandleEvent_8 from "./HandleEvent_8";
import Ep6_JsxAdvance from "./JSXAdvance_6";
import Prop_7 from "./Props_7";
import Ref_9 from "./Ref_9";
import SettingColor from "./Setting_color_11";
import StateTest from "./State_10";

function BodyPage() {
    return(
        <main>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="thumbnail">
                        <div className="caption">
                        <h3>NAME</h3>
                            <p> 
                            <button type="button" className="btn btn-primary">Button</button>
                            <button type="button" className="btn btn-warning">Button 2 </button>
                            </p>
                            </div>
                        </div>
                    </div>
                    <Ep6_JsxAdvance />
                    <Prop_7 />
                    <HandleEvent_8 />
                    <Ref_9 />
                    <StateTest />
                    <SettingColor />
        </main>
    )
}

export default BodyPage;