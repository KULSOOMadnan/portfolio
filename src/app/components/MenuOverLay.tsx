import React from "react";
import NavLink from "./NavLink";

interface Link {
  path: string;
  title: string;
}

// Define the type for the props
interface MenuOverLayProps {
  links: Link[];
}

// Define the functional component with proper typing
const MenuOverLay: React.FC<MenuOverLayProps> = ({ links } ) => {
  return (
    <ul className="flex md:hidden flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}

export default MenuOverLay;
