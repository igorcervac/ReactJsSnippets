const App = () => {
    const {useState} = React;
    const [checked, setChecked] = useState(false);
    return (
        <>
            <label htmlFor="chkBox">
                {checked ? 'checked': 'not checked'}
            </label>
            <input id="chkBox" type="checkbox" value={checked} onChange={() => setChecked(!checked)}/>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));