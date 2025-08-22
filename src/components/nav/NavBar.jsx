import { Link } from "react-router"

export const NavBar = () => {
    return (
        <header className="flex h-[6rem] items-center bg-gray-950 pl-[4rem] text-white">
            <ul className="flex items-center gap-[8rem] text-2xl font-semibold">
                <li>
                    <Link to="/">All Posts</Link>
                </li>

                <li>
                    <Link to="/my_posts">My Posts</Link>
                </li>

                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>

                <li>
                    <Link to="/new_posts">New Posts</Link>
                </li>

                <li className="absolute right-[16rem]">
                    <Link to="/profile">Profile</Link>
                </li>

                <li className="absolute right-[5rem]">
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </header>
    )
}
