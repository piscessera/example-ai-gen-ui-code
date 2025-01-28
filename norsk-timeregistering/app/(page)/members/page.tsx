"use client";

import React from 'react';
import UserTable from '@/app/components/users/UserTable';
import Tabs from '@/app/components/ui/Tabs';
import Button from '@/app/components/ui/Button';

const MembersPage = () => {
  const handleTabChange = (value: string) => {
    // Handle tab change, e.g., fetch data based on the selected tab
    console.log('Selected tab:', value);
  };

  return (
    <div>
      <Tabs
        tabs={[
          { label: 'Members', value: 'members' },
          { label: 'Admins', value: 'admins' },
        ]}
        onTabChange={handleTabChange}
      />
      <div className="flex justify-between items-center mb-4 mt-4">
        <h2 className="text-2xl font-bold">Members</h2>
        <div className="flex space-x-2">
          <Button>Add new</Button>
          <Button>Import members</Button>
          <Button>Export members (Excel)</Button>
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default MembersPage;
