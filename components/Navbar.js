import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <p>EPL Clubs</p>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
        </nav>
    );
}
 
export default Navbar;