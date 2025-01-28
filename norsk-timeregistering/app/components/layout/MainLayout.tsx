import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SearchBar from './SearchBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <SearchBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
