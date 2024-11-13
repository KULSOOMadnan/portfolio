import Link from "next/link";

interface NAVLINKS {
  href : string,
  title : string
}

const NavLink = ({  href, title } : NAVLINKS) => {
  return (
    
    <Link
      href={href}
      className="block py-2  pl-3 pr-4 text-[#81888e] sm:text-xl roundede md:p-0 hover:text-brown-100"
    >
    {title}
    </Link>
  );
};

export default NavLink;
