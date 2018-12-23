let defaultState={
  beer : []
}

const rootReducer = (state = defaultState,action)=>{
  if(action.type==="CHANGE_BEER"){
      return{
          beer:action.listbeer
      }
  } else if(action.type==="FAVORITE_BEER"){
      return{
        // ...beer,
        // // beer : [action.favoriteBeer]
      }
  }
  else{
      return{
          ...state
      }
  }
}

export default rootReducer;