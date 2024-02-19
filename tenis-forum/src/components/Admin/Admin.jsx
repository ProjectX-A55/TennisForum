import { useEffect, useState } from "react";
import { getAllUsers, getUserByUserName, getUserPosts, updateUser } from "../../services/user-service";


const Admin = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;

    useEffect(() => {
        const fetchUsers = async () => {
            const usersSnapshot = await getAllUsers();
            let users = usersSnapshot.val();
            users = users ? Object.values(users) : [];

            for (let user of users) {
                const postsSnapshot = await getUserPosts(user.username);
                const posts = postsSnapshot.val();
                user.postCount = posts ? Object.keys(posts).length : 0;
            }

            setUsers(users);
        };

        fetchUsers();
    }, []);

    const blockUser = async (username) => {
        const userSnapshot = await getUserByUserName(username);
        const user = userSnapshot.val();
        user.isBlocked = !user.isBlocked;

        await updateUser(username, { isBlocked: user.isBlocked });

        setUsers(prevUsers => prevUsers.map(u => u.username === username ? { ...u, isBlocked: user.isBlocked } : u));
    };


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Ban <br /> hammer
                        </th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Number of posts</th>
                        <th>Banned</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map(user => (
                        <tr key={user.uid}>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        checked={user.isBlocked}
                                        onChange={() => blockUser(user.username)}
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.avatarUrl} alt="User avatar" />
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
                                <div className="font-normal">{user.postCount} posts</div>
                            </th>
                            <th>
                                <div className="blocked">{user.isBlocked.toString()}</div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="join grid grid-cols-2 w-1/4 mx-auto mt-7">
                {currentPage > 1 && <button className="join-item btn btn-outline" onClick={() => paginate(currentPage - 1)}>Previous</button>}
                {currentPage < Math.ceil(users.length / usersPerPage) && <button className="join-item btn btn-outline" onClick={() => paginate(currentPage + 1)}>Next</button>}
            </div>
        </div>

    );
};

export default Admin;