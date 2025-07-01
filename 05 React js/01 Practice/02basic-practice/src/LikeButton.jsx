import { useState  } from "react";
function likebutton(){
    let[like,setlike]=useState(false);

    let Togleclicked=()=>{
        setlike(!like);
    };
    let likestyle = {color : "red"}
    return (
        <>
            <p onClick={Togleclicked} style={{ cursor: "pointer"}}>
                {like ? (<i className="fa-solid fa-heart" style={likestyle}></i>)  : (<i className="fa-regular fa-heart" ></i>)} 
            </p>
            
        </>
        
    )
}
export default likebutton;