import Link from 'next/link';

const Navbar = () => {
  return (
   <>
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">MySite</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
   </>
  );
};
export default Navbar;
