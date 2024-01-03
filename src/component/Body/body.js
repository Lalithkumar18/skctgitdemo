import { useNavigate } from 'react-router-dom';
import React from "react";
import './body.css';
export const Body = () => {
    const navigate = useNavigate();
        return(
            <div className="body-div">
                <br></br>
                <fieldset className="fieldset">
                    <form className="form">
                    <h1 className="h">Choose The Best Healthier Way Of Life</h1><br></br><br></br>
                    <p className="p">Through the power of giving, we make the world a better place.<br></br> Join today in our effort to make someone feel blessed today</p><br></br><br></br>
                    <button className="ShopNow" onClick={() => navigate('/Shop')}>SHOP NOW</button>
                    </form>
                </fieldset>
                <fieldset className="fieldset1">
                    <form className="form">
                    <h1 className="h">Why You Need To Choose us?</h1><br></br><br></br>
                    <p className="p">Choose us for an unparalleled shopping experience! <br></br>Our supermarket is committed to providing you with top-notch service,<br></br> a diverse range of high-quality products, and unbeatable convenience.<br></br> With a focus on customer satisfaction, we strive to exceed your expectations<br></br> at every visit. Enjoy a seamless shopping journey with our <br></br>user-friendly website, competitive prices, and a vast selection of fresh,<br></br> locally sourced produce.</p><br></br><br></br>
                    </form>
                </fieldset>
            </div>
        );
}