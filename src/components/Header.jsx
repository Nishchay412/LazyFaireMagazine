import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
export function Header()
const [selectedpage,setSelected]=useState("")


const navigate = useNavigate(); // Hook should be called at the top level of the component


function handleNavigation() {

  navigate(`/${selectedPage}`); // Correctly interpolate the dynamic path
}



{
    return(<div className="flex justify-between">


<div>
    <img src ="/LazyFaire 2023 Logo.png" className="w-36 h-auto"></img>
</div>
<div className="flex gap-5">
<div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-400 to-purple-800 font-bold hover: hover:shadow-purple-400 hover:shadow-md hover:rounded-lg transition-all duration-300"
onClick={setSelected("Home")}>
    HOME
</div>


<div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-400 to-purple-800 font-bold hover: hover:shadow-purple-400 hover:shadow-md hover:rounded-lg transition-all duration-300"
onClick={setSelected("Team")}>
    OUR TEAM 
</div>
<div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-400 to-purple-800 font-bold hover: hover:shadow-purple-400 hover:shadow-md hover:rounded-lg transition-all duration-300">
    CONTACT US 
</div>
<div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-400 to-purple-800 font-bold hover: hover:shadow-purple-400 hover:shadow-md hover:rounded-lg transition-all duration-300">
    MAGAZINE
</div>

</div>

    </div>)
}