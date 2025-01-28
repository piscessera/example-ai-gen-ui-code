import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Table from '../ui/Table';
import { getUsers } from '@/services/api'; // Import the getUsers function

interface User {
  photo: string;
  memberName: string;
  mobile: string;
  email: string;
  status: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalMembers, setTotalMembers] = useState(0);
  const [currentMembers, setCurrentMembers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data.users);
        setTotalMembers(data.total);
        setCurrentMembers(data.current);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p>Total members: {totalMembers}</p>
          <p>Current used: {currentMembers}</p>
        </div>
        <Button>
          <span className="text-2xl">&#8592;</span> Filter
        </Button>
      </div>
      <Table headers={['Photo', 'Member name', 'Mobile', 'Email', 'Status', 'Operation', 'Action']}>
        {users.map((user) => (
          <tr key={user.email}>
            <td className="px-6 py-4 whitespace-nowrap">
              <img src={user.photo} alt={user.memberName} className="h-10 w-10 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{user.memberName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.mobile}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {user.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="text-indigo-600 hover:text-indigo-900">
                {/* Edit icon */}
              </button>
              <button className="text-indigo-600 hover:text-indigo-900 ml-4">
                {/* Delete icon */}
              </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Button>Login</Button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default UserTable;
