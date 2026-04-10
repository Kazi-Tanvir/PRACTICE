export default async function Page({ params }) {
  const { slug } = await params
  let language = ['Python', 'JavaScript', 'Go', 'Rust']
  if (language.includes(slug)) {
    return <div>My Post: {slug}</div>
  }
  else {
  return <div>Post Not Found</div>
}
}