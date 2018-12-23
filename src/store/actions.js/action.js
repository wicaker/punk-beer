import axios from "axios";

export const createPost = postData => dispatch => {
    fetch('http://localhost:8080/feed/posts',{
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
}; 

export function loadBeer(){
    return(dispatch)=>{
        return axios.get("https://api.punkapi.com/v2/beers?page=1&per_page=9").then((response)=>{
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