import { useContext } from "react";
import ClubsContext from "./ClubsContext";

export default function App(){
    const {clubs} = useContext(ClubsContext);
    return (
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Founded</th>
            </tr>    
            </thead> 
            <tbody>           
            {
                clubs.map((c,i)=> ({ id:i, ...c }))
                .map(p => (
                <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.founded}</td>
                </tr>
                ))
            }  
            </tbody>         
        </table>
    );
}           
 