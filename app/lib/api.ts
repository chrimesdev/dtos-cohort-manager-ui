export async function getData(endpoint: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}${endpoint}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
