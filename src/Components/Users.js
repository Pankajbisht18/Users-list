import { useEffect, useState } from "react";
import CustomPagination from "./CustomPagination";
import './css/Users.css'

const Users = () => {
    const[data, setData] = useState([]);
    const[page, setPage] = useState(1);
    // eslint-disable-next-line
    const fetchData = () => {
        fetch(`https://reqres.in/api/users?page=${page}`)
        .then(res => res.json())
        .then((json) => {
            setData(json.data)
        });
    }
    useEffect(()=>{
        fetchData();
    },[page]);
    console.log(data)
    console.log(page)
    return ( 
        <div>
            <h1 className="heading">Users List</h1>
            <div className="users">
                {data.map((users,i)=>{
                    return(
                        <div className="card">
                            <img src={users.avatar} alt="user" />
                            <h1 className="userHead">ID: {users.id}</h1>
                            <p className="userTitle">Email: {users.email}</p>
                            <p className="userTitle">First Name: {users.first_name}</p>
                            <p className="userTitle">Last Name: {users.last_name}</p>
                        </div>
                    )
                })}
            </div>
            <CustomPagination 
                setPage={setPage}
            />
        </div>
     );
}
 
export default Users;