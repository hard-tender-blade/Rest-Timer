import React, { useState }from "react";

export default function Login() {
   return (
     <div className="Login bg-red-200 h-screen w-screen flex justify-center items-center">
        <div className="Contents bg-slate-400 h-96 w-96 flex flex-col">
            <div className="text-3xl font-bold text-center mt-4">
                Login to continue
            </div>
            <input className="mt-6" type="login"/>
            <input className="mt-6" type="password"/>

            <div className="flex justify-between">
                <button>Log in</button>
                <button>Sign up</button>
            </div>

            <div className="text-end">Forgotten password</div>

            <button>Content with Google</button>

        </div>
        
     </div>  
   );
}