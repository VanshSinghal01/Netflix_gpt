import { img1 } from "./images"
import { Link} from "react-router-dom"
export const Home=()=>{
    return<div className="main-wraper">
    <div className="main">
        <img  className="main-img"src={img1}/>
        <Link to="/"></Link>
        <Link to="/oildriller" className="first-button">Oil drilling</Link>      
        <Link to="/Artificial" className="second-button">Artificial reef</Link>
        <Link to="/overfishing" className="third-button">overfishing </Link>
        <button className="reset">Reset</button>
        <button className="info">i</button>
    </div>
    <div className="text-area-wrap">
        <p>
            How are humans dependent on the ocean? How do humans cause modifications to the ocean?
            The ocean is a large saltwater ecosystem that only thrives when everything is in balance. As humans, we are dependent on this ecosystem for food and nonrenewable resources like oil. Our human activities have consequences for this ecosystem. As a result, modifications, or changes, happen. 
            The modifications can be positive or negative. Click on each label to find out more.
        </p>
    </div>
</div> 
}