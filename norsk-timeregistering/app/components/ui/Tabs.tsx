import React, { useState } from 'react';

interface TabsProps {
  tabs: { label: string; value: string }[];
  onTabChange: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange(value);
  };

  return (
    <div className="mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`px-4 py-2 mr-2 rounded-t-lg ${
            activeTab === tab.value ? 'bg-white text-indigo-700' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
