import axios from "axios";

export function loadBeer(){
    return(dispatch)=>{
        return axios.get("https://api.punkapi.com/v2/beers?page=1&per_page=6").then((response)=>{
            dispatch(changeBeer(response.data));
        })
    }
}

export function changeBeer(beer){
    let listBeer = []
    for(let i=0;i<beer.length;i++){
        listBeer.push({id: beer[i].id, name: beer[i].name, image_url: beer[i].image_url, description: beer[i].description})
    }
    return{
        type:"CHANGE_BEER",
        listbeer : beer
    }
}