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
    <div className="container">
        <div className="col-xs-12">
            <h2 className="text-center">Astronauts</h2>
        </div>
        <div className="col-xs-12">
            <table className="table table-striped table-hover" border="1">
                <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Name</th>
                    <th>Craft</th>
                </tr>    
                </thead> 
                <tbody>           
                {
                    data.map(p => (
                    <tr key={p.id}>
                        <td>{p.id+1}</td>
                        <td>{p.name}</td>
                        <td>{p.craft}</td>
                    </tr>
                    ))
                }  
                </tbody>         
            </table>
      </div>
    </div>
  );
}           
 