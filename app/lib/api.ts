export async function getData(endpoint: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const url = `${API_URL}${endpoint}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    throw error;
  }
}
