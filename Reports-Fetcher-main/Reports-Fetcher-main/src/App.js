// App.js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <table>
      <tbody>
        <tr style={{backgroundColor:"rgb(100, 108, 93)"}}>
          <th>Id</th>
          <th>Email</th>
          <th>Name</th>
          <th>User Name</th>
          
          <th>Phone</th>
          <th>Address</th>
          <th>University</th>
          <th>Blood Group</th>
          <th>Height</th>
          <th>Age</th>
          <th>Date of Birth</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.firstName}</td>
            <td>{item.username}</td>
            
            
            <td>{item.phone}</td>
            <td>{item.address.city}</td>
            <td>{item.university}</td>
            <td>{item.bloodGroup}</td>
            <td>{item.height}</td>
            <td>{item.age}</td>
            <td>{item.birthDate}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default App;