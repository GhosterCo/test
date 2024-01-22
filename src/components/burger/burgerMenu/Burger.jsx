import s from "./burger.module.scss";

import Navigator from "@/common/navigator/Navigator";
import { navItems } from "@/common/store/navItems";

import { AiOutlineCloseSquare } from "react-icons/ai";

const Burger = ({
  burgerOpen,
  closeBurger,
}) => {
  const onClose = () => {
    closeBurger();
  };

  return (
    <div className={`${s.burgerMenu} ${burgerOpen ? "" : s.closed}`}>
      <button className={s.close} onClick={onClose}>
        <AiOutlineCloseSquare />
      </button>
      <nav className={s.list} onClick={onClose}>
        <Navigator navLinks={navItems} />
      </nav>
    </div>
  );
};

export default Burger;
