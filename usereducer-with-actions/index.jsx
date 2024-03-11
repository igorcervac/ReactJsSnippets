const reduce = (state, action) => {
    if (action.type === 'INC'){
        return {
            ...state, 
            counter: state.counter+1
        }
    }
    else if (action.type === 'DEC'){
        return {
            ...state,
            counter: state.counter-1
        }
    }
}

function App(){
    const initialState = {
        counter: 0
    };

    const {useReducer} = React;
    const [state,dispatch] = useReducer(reduce, initialState);

    return (
    <>
        <h3>{state.counter}</h3> 
        <button onClick={() => dispatch({type: 'INC'})}>++</button>
        <button onClick={() => dispatch({type: 'DEC'})}>--</button>
    </>);
}

ReactDOM.render(<App/>, document.getElementById('root'));