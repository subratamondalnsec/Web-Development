function handleFromSubmit(event){
    event.preventDefault();
    console.log("from was submitted");
}


export default function from(){
    return (
        <form>
            <input placeholder="Write something"/>
            <button onClick={handleFromSubmit}>Submit</button>
        </form>
    )
}