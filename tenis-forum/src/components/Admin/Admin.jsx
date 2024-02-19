import { useEffect, useState } from "react";
import { getAllUsers, getUserPosts } from "../../services/user-service";


const Admin = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {

        const fetchUsers = async () => {
            const usersSnapshot = await getAllUsers();
            const users = usersSnapshot.val();
            setUsers(users ? Object.values(users) : []);
        };

        fetchUsers();
    }, []);

    // useEffect(() => {
    //     getUserPosts(users[15]?.username).then((snapshot) => {
    //        setCount(Object.keys(snapshot.val()).length);
    //     });
        
    // }, [users]);
    console.log(users[15]?.username);
    return (

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Number of posts</th>
                        <th>Blocked</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.uid}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.avatarUrl} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.username}</div>
                                        <div className="text-sm opacity-50">{`${user.firstName} ${user.lastName}`}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="email">{user.email}</div>
                            </td>
                            <th>
                                <div className="font-normal">145 posts</div>
                            </th>
                            <th>
                                <div className="blocked">{user.isBlocked.toString()}</div>
                            </th>
                        </tr>))}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Number of posts</th>
                        <th>Blocked</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>

    );
};

export default Admin;