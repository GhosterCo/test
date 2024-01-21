import s from "./sidebar.module.scss";

import Link from "next/link";

import ProfileLink from "../profileLink/ProfileLink";
import Navigator from "@/common/navigator/Navigator";
import { navItems } from "@/common/store/navItems";

import { TbSettings2 } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.up}>
        <Link href={"/"} className={s.head}>
          <TbSettings2 />
          <div className={s.logo}>
            <h1>Dashboard</h1>
            <span>v.01</span>
          </div>
        </Link>
        <nav>
          <Navigator navLinks={navItems} />
        </nav>
      </div>
      <ProfileLink />
    </div>
  );
};

export default Sidebar;
