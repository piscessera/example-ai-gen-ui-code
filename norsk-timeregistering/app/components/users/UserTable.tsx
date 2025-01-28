"use client";

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Table from '../ui/Table';
import { getUsers } from '@/services/api';
import Image from 'next/image';

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
          <p className="text-gray-500">Total members: {totalMembers}</p>
          <p className="text-gray-500">Current used: {currentMembers}</p>
        </div>
        <Button>
          <span className="text-2xl">&#8592;</span> Filter
        </Button>
      </div>
      <Table headers={['Photo', 'Member name', 'Mobile', 'Email', 'Status', 'Operation', 'Action']}>
        {users.map((user) => (
          <tr key={user.email}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="relative h-10 w-10">
                <Image
                  src={user.photo || '/placeholder-image.jpg'} // Provide a placeholder image
                  alt={user.memberName}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
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
            <td className="px-6 py-4 whitespace-nowrap space-x-2">
              <button className="text-indigo-600 hover:text-indigo-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button className="text-indigo-600 hover:text-indigo-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
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
