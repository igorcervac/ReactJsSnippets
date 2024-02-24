import clubs from './data.json'
export default function App(){
  return (
    <>
        <h1>Clubs</h1>
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
                clubs.map(p => (
                <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.country}</td>
                    <td>{p.founded}</td>
                </tr>
                ))
            }  
            </tbody>         
        </table>
      </>
  );
}           
 