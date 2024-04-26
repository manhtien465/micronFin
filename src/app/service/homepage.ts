export async function getDataHomePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/homepage?populate=deep`
  );
  return res.json();
}

