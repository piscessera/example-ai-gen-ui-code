// services/api.ts
const API_BASE_URL = 'https://your-api-endpoint.com'; // Replace with your API endpoint

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`); // Replace '/users' with your API endpoint for fetching users
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      users: data.map((user: any) => ({
        photo: user.photo || '/placeholder-image.jpg', // Replace with your user photo field or a placeholder image URL
        memberName: user.name, // Replace with your user name field
        mobile: user.mobile, // Replace with your user mobile field
        email: user.email, // Replace with your user email field
        status: user.status, // Replace with your user status field
      })),
      total: data.total || 0, // Replace with your total members field
      current: data.current || 0, // Replace with your current used members field
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
