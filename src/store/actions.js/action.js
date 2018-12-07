import axios from "axios";

export function loadBeer(){
    return(dispatch)=>{
        return axios.get("https://api.punkapi.com/v2/beers?page=1&per_page=6").then((response)=>{
            dispatch(changeBeer(response.data));
        })
    }
}

export function changeBeer(beer){
    return{
        type:"CHANGE_BEER",
        listbeer : beer
    }
}