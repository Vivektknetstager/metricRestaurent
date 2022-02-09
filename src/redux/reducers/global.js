const initialState={
    value: 0,
    isLoading:true,
   };
   export default counterReducer=(state=initialState, action)=>{
    console.log(state)
    switch(action.type){
     case 'INCREASE':
      return {...state, value: ++state.value};
     case 'DECREASE':
      return {...state, value: - state.value};
     case 'START_LOADER':
      return {...state, isLoading: true};
     case 'STOP_LOADER':
      return {...state, isLoading: false};
     default:
      return state; 
    }
   }