import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <a>
        <Logo />
      </a>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
