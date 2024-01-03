import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Login.css';
export const LogIn = () =>{

    const navigate = useNavigate()

        return(
            <div className='Login_div'>

                <center>
                <br></br>
                <br></br>
                <br></br>
                <fieldset id = "fieldset">
                    <form>
                    <h1 class = "h1">LogIn</h1>
                        <table>
                            <tr>

                        <td class = "Email"><input type = "email" placeholder='Enter Your e-mail'></input></td></tr><br></br>

                    <tr>
                        <td class="Password"><input type = "Password" placeholder='Enter Your Password'></input></td>
                        </tr>
                        </table>

                        <div class = "Remember">
                        <input type='checkbox'></input>
                        Remember me</div><br></br>
                        <button type="button" class = "LogInButton" onClick={() => navigate('/Body')}>LogIn</button><br></br>
                        or<br></br>

                        <button type="button" class = "AnotherLogIn" onClick={() => navigate('/LogInNo')}>LogIn with Mobile Number</button><br></br><br></br>
                        <div class = "ForgetPassword">Forget Password?  <button type="button" class = "ClickHere">Click Here</button></div><br></br>

                        <div class = "User">New User?
                        <button type = "button" class = "Up" onClick={() => navigate('/SignUp')}>Sign Up</button></div>
                    </form>
                </fieldset>
                </center>
                <br></br>
                <br></br>
                <br></br>






            </div>
        );

}