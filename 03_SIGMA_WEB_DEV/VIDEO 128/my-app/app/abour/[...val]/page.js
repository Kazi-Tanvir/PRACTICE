export default async function Page({ params }) {
  const { slug } = await params
  console.log(params)

    return <div>My Post: {slug}</div>
  }
