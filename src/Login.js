import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className="login">
           <img src="https://hbr.org/resources/images/article_assets/2020/04/Apr20_14_LinkedInHBR1.jpg"
           alt=""/>

           <form>
               <input placeholder="Full name (required if registering)" 
               type="text"/>
           </form>
        </div>
    )
}

export default Login;
