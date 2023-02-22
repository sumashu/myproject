

function FunctionEvent() {
    function handleEvent (){
        console.log("button is clicked");
    }
    
        return(
          <div>
            Function Event
            <button onClick={handleEvent}>Click Here</button>
          </div>
        )
    }

 export default FunctionEvent
