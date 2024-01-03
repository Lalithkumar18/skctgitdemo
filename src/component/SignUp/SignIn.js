import { useNavigate } from 'react-router-dom';
import React from 'react';
import './SignIn.css';
export const SignUp = () =>{
    const navigate = useNavigate()
    return(
        <div className='SignIn_div'>
            <br></br>
                <br></br>
                <br></br>
            <center>
                <h1>Welcome</h1>
                <h3>Please Sign up to Continue</h3>
                <fieldset id = "fieldset">
                    <br></br>
                    <br></br>
                    <form>
                        <table>
                        <tr>
                            <td class = "Name">
                                <input type="text" placeholder='Enter your Name'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td  class = "E-mail">
                            <input type="email" placeholder='Enter your E-mail(Optional)'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td class ="Number">
                                <input  type="number" placeholder='Enter your mobile number'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td class = "Password">
                                <input type="password" placeholder='Create a strong password'></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td class = "Password1">
                                <input  type="password" placeholder='Re-Enter your password'></input>
                            </td>
                        </tr>
                        </table>
                        <br></br><br></br>
                        Already a user?
                        <button class= "LogIn" onClick={() => navigate('/LogIn')}>LogIn</button>
                    </form>
                    <br></br>
                    <br></br>
                </fieldset>
                <h1>
       Fill Required Details
        </h1>
        <fieldset id="field"><p><b>Address Details</b></p>
        <center><form><table>
        <tr><td class ="Pincode" ><input type="number" placeholder='Enter your pincode*'></input></td><br></br><br></br></tr><br></br>
        <tr><td class = "HouseNo" ><input type="number" placeholder='Enter your house no'></input></td><br></br><br></br></tr><br></br>
        <tr><td class = "BuildingName" ><input type="text" placeholder='Enter your building name'></input></td><br></br><br></br></tr><br></br>
        <tr><td class = "Address" ><input type="text" placeholder='Enter your address*'></input></td><br></br><br></br></tr><br></br>
        <tr><td class = "Area" ><input type="text" placeholder='Enter your area*'></input></td><br></br><br></br></tr><br></br>
        <tr><td class = "CityState" ><input type="text" placeholder='Enter your city/state*'></input></td><br></br></tr></table></form></center></fieldset><br></br>
        <fieldset id="field1"><h2>Delivery Contact Details</h2>
        <p><b>This mobile number will receive an OTP,required for collecting the order.</b></p>
        <center><form>
        <table>
        <tr><td class = "Name" ><input type="text" placeholder='Enter your name*'></input></td><br></br><br></br></tr><br></br>
        <tr><td class = "Number1" ><input type="number" placeholder='Enter your mobile no*'></input></td><br></br><br></br></tr></table></form></center><br></br></fieldset><br></br>
        <button onClick={() => navigate('/Body') } className='SignIn'>SIGN-UP</button>
        <br></br><br></br>
            </center>
        </div>

    );
    }