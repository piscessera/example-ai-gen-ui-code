// services/api.ts
const API_BASE_URL = 'https://your-api-endpoint.com'; // Replace with your API endpoint

// Mock Data
const mockUsers = [
  {
    photo: '/mock-images/user1.jpg',
    memberName: 'John Doe',
    mobile: '555-123-4567',
    email: 'john.doe@example.com',
    status: 'Active',
  },
  {
    photo: '/mock-images/user2.jpg',
    memberName: 'Jane Smith',
    mobile: '555-987-6543',
    email: 'jane.smith@example.com',
    status: 'Active',
  },
  {
    photo: '/mock-images/user3.jpg',
    memberName: 'David Lee',
    mobile: '555-111-2222',
    email: 'david.lee@example.com',
    status: 'Inactive',
  },
];

export const getUsers = async () => {
  // Simulate API call delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay

  // Return mock data
  return {
    users: mockUsers,
    total: 150, // Example total number of members
    current: 3, // Example current number of used members
  };
};
