import { unstable_noStore as noStore } from 'next/cache';

export async function getDataHomePage() {
  noStore();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate=deep`
  );
  return res.json();
}
