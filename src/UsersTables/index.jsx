import { useEffect, useState } from "react";
import './usersTables.css'
import axios from "axios";

export default function usersTables() {
  const [users, setUsers] = useState([]);
  const getData = () => {
    fetch("https://jbh-mockserver.onrender.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
   
  useEffect(() => {
    getData()
  },[])
  const remove = (id)=>{
    axios.delete("https://jbh-mockserver.onrender.com/user/"+ id)
    .then(res=> {
        console.log(res);
        getData()
    })
  }

  const update = () =>{
    axios.put("https://jbh-mockserver.onrender.com/user")
  }
  return (
    <div id="table">
      <div>
        <div id="add">add user <span><button>➕</button></span></div>
      </div>
       <table >
        <th>ID</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>email</th>
        <th>dateOfBirth</th>
        <th>update</th>
        <th>delete</th>
        {users.map(data=>(<tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.dateOfBirth}</td>
            <td onClick={()=> update(data)}>🖋️</td>
            <td onClick={() =>remove(data.id)}>🗑️</td>
        </tr>))}
       </table>
     
    </div>
  );
}
