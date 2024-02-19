import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/user-service";


const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            const usersSnapshot = await getAllUsers();
            const users = usersSnapshot.val();
            setUsers(users ? Object.values(users) : []);
        };

        fetchUsers();
    }, []);


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
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
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
                                            <img src={user.avatarUrl} alt="User Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.firstName}</div>
                                        <div className="text-sm opacity-50">{user.lastName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>))}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>

    );
};

export default Admin;