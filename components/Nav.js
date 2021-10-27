import requests from "../utils/requests";
import { useRouter } from "next/dist/client/router";
function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      {/* looping through the title to get the nav bar */}
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {requests.map(({ type, title, url }) => (
          <h2
            key={type}
            onClick={() => router.push(`/?genre=${type}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      {/* Add fading feature at the end of the nav */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
