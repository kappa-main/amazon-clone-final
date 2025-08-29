export const initialState={
    basket:[],
    user:null
};

const reducer=(state,action)=>{
    let basket2= state.basket;
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...basket2, action.item],
            };
        case "REMOVE_FROM_BASKET":
            console.log("entered");
            console.log(action.id);
            return{
                ...state,
                basket:basket2.filter((noteitem,index)=>{
                    return index!==action.id;
                })
            }
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[],
            };
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
}
export default reducer;