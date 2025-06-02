const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export async function getDishes() {
  const res = await fetch(`${BASE_URL}/dishes`);
  if (!res.ok) throw new Error('Failed to fetch dishes');

  const data = await res.json();
  console.log('Fetched dishes:', data); 
  return data;
}

export async function addDish(data: { name: string; price: number }) {
  const res = await fetch(`${BASE_URL}/dishes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to add dish');

  return await res.json();
}
