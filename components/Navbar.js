import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <p>EPL Clubs</p>
            <div className="nav-links">
                <Link href={'/'} className="nav-link">Home</Link>
                <Link href={'/about'} className="nav-link">About</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;