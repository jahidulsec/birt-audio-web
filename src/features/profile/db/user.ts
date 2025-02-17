import { API_URL } from "@/lib/data";

export const getUserDetails = async (token: string) => {
  const response = await fetch(`${API_URL}/api/v1/user/1`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }
  return data;
};
