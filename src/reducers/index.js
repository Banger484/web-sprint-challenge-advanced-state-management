import { START_FETCH_SMURFS, SUCCESSFUL_FETCH_SMURFS, FAILURE_FETCH_SMURFS, ADD_SMURF } from "../actions/index";
export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action)=>{
    console.log('reducer', action);
    switch(action.type) {
        case START_FETCH_SMURFS:
            console.log('is this a thing')
        return {
            ...state,
            isFetching: true,
            error: ''
        }
        case SUCCESSFUL_FETCH_SMURFS:
            console.log('hi hi')
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FAILURE_FETCH_SMURFS:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF:
            const newSmurf = {
                id: Date.now(),
                name: action.payload.name,
                position: action.payload.position,
                nickname: action.payload.nickname,
                description: action.payload.description
            }
            return console.log(newSmurf)
        default:
            return (state);
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.