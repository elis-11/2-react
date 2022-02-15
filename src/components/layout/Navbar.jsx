import { Icons } from "./icons/Icons";
import { Links } from "./links/Links";
import { Logo } from "./logo/Logo";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <Links />
      <Icons />
    </nav>
  );
};

// export default Navbar;
