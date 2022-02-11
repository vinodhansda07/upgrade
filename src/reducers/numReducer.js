
const numReducer = (numbr, action)=> {
    if(action.type === "INCR"){
      numbr = numbr + 5;
    }
    else if(numbr > 0 && action.type === "DECR"){
      numbr =  numbr - 1;
    }
    return numbr;
}

export default numReducer;