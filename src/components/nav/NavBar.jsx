import { Link, useNavigate } from "react-router"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <header className="flex h-[6rem] items-center justify-around bg-gray-950 pl-[4rem] text-white lg:justify-start">
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

                <li className="lg:absolute lg:right-[16rem]">
                    <Link to="/profile">Profile</Link>
                </li>

                {localStorage.getItem("learning_user") ?
                    <li className="lg:absolute lg:right-[4rem]">
                        <Link
                            to=""
                            onClick={() => {
                                localStorage.removeItem("learning_user")
                                navigate("/login", { replace: true })
                            }}
                        >
                            Logout
                        </Link>
                    </li>
                :   ""}
            </ul>
        </header>
    )
}
