import axios from 'axios';
export const START_FETCH_SMURFS = "START_FETCH_SMURFS"
export const SUCCESSFUL_FETCH_SMURFS = "SUCCESSFUL_FETCH_SMURFS"
export const FAILURE_FETCH_SMURFS = "FAILURE_FETCH_SMURFS"
export const ADD_SMURF = "ADD_SMURF"

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCH_SMURFS})
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type: SUCCESSFUL_FETCH_SMURFS, payload: res.data })
        }).catch(err => {
            dispatch({ type: FAILURE_FETCH_SMURFS, payload: err.data })
        })
}
export const addSmurf = () => dispatch => {
   dispatch({ type: ADD_SMURF})
   axios.post(`http://localhost:3333/smurfs`)
   .then(res => {
       console.log(res)
   })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.