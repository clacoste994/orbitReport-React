import satData from "./satData";

const Table = ( {sat=satData} ) => {

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      
       {sat.map((data) =>  (
     <tr  key={data.id}>
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational === true ? 'operational' : 'Not operational'}</td>
       
     </tr>
))}
     </tbody>
   </table>
  );
};

export default Table;