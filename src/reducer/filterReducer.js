function filterReducerFunction (state,action){
    switch(action.type){
        case "RESET":
            return{...state,filterSelect:action.payload}
        case "SET_CATEGORY":
            return{...state,filterSelect: action.payload}
    }
}
export {filterReducerFunction};