import { API_URL } from "@/lib/data";

export const getPlaylist = async (id: string, token: string) => {
  const response = await fetch(`${API_URL}/api/v1/place/${id}`, {
    method: "POST",
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
