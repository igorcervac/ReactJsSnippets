function App(){

    const {useState, useEffect} = React;
   
    const [data, setData] = useState(null);
    useEffect(() => 
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => json.people.map(
            (p,i) => {
                return { id:i, ...p } 
            }
        ))
        .then(peopleWithIds => {
            setData(peopleWithIds);
        }), 
        []);
    
        if (data) {
            return (
                <table border="1">
                    <thead>
                    <tr>
                        <th>Craft</th>
                        <th>Name</th>
                    </tr>    
                    </thead> 
                    <tbody>           
                    {
                        data.map(p => (
                        <tr key={p.id}>
                            <td>{p.craft}</td>
                            <td>{p.name}</td>
                        </tr>
                        ))
                    }  
                    </tbody>         
                </table>
            );
        }

    return <p>Loading data...</p>;
}            
        
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);