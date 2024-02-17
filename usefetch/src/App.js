import { useFetch } from "./useFetch";
export default function App(){

  const { loading, data, error} = useFetch('http://api.open-notify.org/astros.json');

  if (loading) {
      return (<p>Loading data...</p>);
  }
  
  if (error){
      return (<pre>{JSON.stringify(error, null, 2)}</pre>);
  }
  
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
 