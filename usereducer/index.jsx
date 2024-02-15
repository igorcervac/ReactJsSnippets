function App(){
    const {useReducer} = React;

    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle}/>
            <span>{checked? "checked": "unchecked"}</span>            
        </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);