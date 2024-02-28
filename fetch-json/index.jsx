function App(){

    const {useState, useEffect} = React;
   
    const [data, setData] = useState(null);

    useEffect(() => 
        fetch('./data.json')
        .then(response => response.json())
        .then(json => json.map(
            (c,i) => ({ id:i, ...c })
        ))
        .then(clubsWithIds => {
            setData(clubsWithIds);
        }), 
        []);
    
        if (data) {
            return (
                <table border="1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Founded</th>
                    </tr>    
                    </thead> 
                    <tbody>           
                    {
                        data.map(c => (
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.country}</td>
                            <td>{c.founded}</td>
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