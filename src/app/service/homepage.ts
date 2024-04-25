export async function getDataHomePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate=*`
  );
  return res.json();
}

