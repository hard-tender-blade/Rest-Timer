import React, { useState }from "react";

export default function Login() {
   return (
     <div className="Login bg-red-200 h-screen w-screen flex justify-center items-center">
        <div className="Contents bg-slate-400 h-96 w-96">
            <div className="text-3xl font-bold">
                Login to continue
            </div>
            <input type="login"/>
            <input type="password"/>

            <button>Log in</button>
            <button>Sign up</button>
        </div>
        
     </div>  
   );
}