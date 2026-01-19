import { Link } from "react-router";

function Header() {
    return (
        <>
            <div className="flex gap-8 justify-center mb-20">
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/articles'>Articles</Link>
            </div>
        </>
    );
}

export default Header;