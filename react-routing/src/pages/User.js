import { useEffect, useState } from "react";
import { getUsers } from "../services/UserService";

const User = () =>{
    const [users, setUsers] = useState(null);

    const userRequest = async ()=>{
        const res = await getUsers();
        await setUsers(res);

    }

    //send api request when loading the page
    useEffect (()=>{
        userRequest();
    },[]);

    return(
        <div>
            {users && users.map(user=>{
                return(
                    <div>{user.username}</div>
                );
            })}
        </div>
    );
}
export default User;