import { FaInstagram } from "react-icons/fa";
import { TbSquareKey } from "react-icons/tb";
import { PiCubeFocusLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { GiReceiveMoney } from "react-icons/gi";
import { TbHelpHexagon } from "react-icons/tb";

export const navItems = [
  { id: 1, icon: <TbSquareKey />, label: "Dashboard", href: "/dashboard", isOption: false },
  { id: 2, icon: <PiCubeFocusLight />, label: "Product", href: "/product", isOption: true },
  { id: 3, icon: <CgProfile />, label: "Customers", href: "/customers", isOption: true },
  { id: 4, icon: <GiReceiveMoney />, label: "Income", href: "/income", isOption: true },
  { id: 5, icon: <FaInstagram />, label: "Promote", href: "/promote", isOption: true },
  { id: 6, icon: <TbHelpHexagon />, label: "Help", href: "/help", isOption: true },    
];