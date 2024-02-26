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
                clubs
                .sort((a,b) => a.founded < b.founded ? -1 : 1)
                .map((c,i) => ({id:i, ...c}))
                .map(ci => (
                <tr key={ci.id}>
                    <td>{ci.name}</td>
                    <td>{ci.country}</td>
                    <td>{ci.founded}</td>
                </tr>
                ))
            }  
            </tbody>         
        </table>
      </>
  );
}           
 