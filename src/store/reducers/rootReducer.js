let defaultState={
  beer : []
}

const rootReducer = (state = defaultState,action)=>{
  if(action.type==="CHANGE_BEER"){
      return{
          beer:action.listbeer
      }
  } else{
      return{
          ...state
      }
  }
}

export default rootReducer;