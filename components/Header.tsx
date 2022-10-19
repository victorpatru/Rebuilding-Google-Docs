import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-50 flex items-center px-3 py-4 shadow-md bg-white">
      {/* Menu Div */}
      <IconButton
        color="gray"
        variant="text"
        size="lg"
        ripple={true}
        className="mr-2 rounded-full"
      >
        <i className="fa-solid fa-bars fa-xl" aria-hidden />
      </IconButton>

      {/* Logo Div */}
      <div className="items-center space-x-2 hidden sm:flex">
        <FontAwesomeIcon icon={faFileWord} className="w-8" color="#1e96f2" />
        <h1 className="hidden md:inline-flex ml-2 text-gray-700 text-2xl">
          Docs
        </h1>
      </div>

      {/* Search Div */}
      <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 md:mx-20 focus-within:text-gray-600 focus-within:shadow-md">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="3x"
          color="gray"
          className="w-6"
          name="search"
        />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      <IconButton
        color="gray"
        variant="text"
        size="lg"
        ripple={true}
        className="hidden md:inline-flex ml-5 md:ml-10 h-20 w-20 border-0 rounded-full"
      >
        <i className="fa-solid fa-grip fa-xl"></i>
      </IconButton>

      <img
        loading="lazy"
        // @ts-ignore
        src={session?.user?.image}
        className="hidden md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2"
        alt="user profile picture"
        onClick={() => signOut()}
      />
    </header>
  );
}
export default Header;
