import { cn } from "@/lib/utils";
import Link from "next/link";

const sections = ["experience", "projects", "about"];

const Navbar = () => {
  return (
    <nav
      className={cn(
        "w-full border border-gray-950 border-r-0 border-t-0 border-l-0",
        "flex items-center p-3"
      )}
    >
      <ul className="list-none flex gap-6">
        {sections.map((item) => (
          <NavItem item={item} key={"nav-" + item} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ item }: { item: string }) => {
  return (
    <li className="uppercase hover:underline">
      <Link href={`#${item}`}>{item}</Link>
    </li>
  );
};

export default Navbar;
