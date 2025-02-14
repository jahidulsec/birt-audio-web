import { API_URL } from "@/lib/data";

export const getPlaces = async () => {
  const data = await fetch(API_URL + "/api/v1/place", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await data.json();

  return res;
};
