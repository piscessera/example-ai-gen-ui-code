import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-indigo-700 text-white w-64 p-4">
      <div className="p-4">
        <h1 className="text-xl font-bold">
          <span className="text-yellow-500">Norsk</span> Timeregistrering
        </h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="mb-2">
            <Link href="/profile" className="block px-4 py-2 hover:bg-indigo-600">
              Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/users" className="block px-4 py-2 hover:bg-indigo-600">
              Users
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/control-panel" className="block px-4 py-2 hover:bg-indigo-600">
              Control panel
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/projects" className="block px-4 py-2 hover:bg-indigo-600">
              Projects
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/tasks" className="block px-4 py-2 hover:bg-indigo-600">
              Tasks
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/logs" className="block px-4 py-2 hover:bg-indigo-600">
              Logs
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/group-chats" className="block px-4 py-2 hover:bg-indigo-600">
              Group chats
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/reports" className="block px-4 py-2 hover:bg-indigo-600">
              Reports
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
