"use client";
import s from "./navigator.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { IoIosArrowForward } from "react-icons/io";

const Navigator = ({ navLinks }) => {
  const pathname = usePathname();
  return (
    <ul className={s.list}>
      {navLinks.map(link => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.id}
            href={link.href}
            className={`${s.link} ${
              isActive ? `${s.active}` : `${s.inactive}`
            }`}
          >
            <li key={link.label}>
              {link.icon}
              <span>{link.label}</span>
            </li>
            {link.isOption ? <IoIosArrowForward id={s.arrow} /> : <></>}
          </Link>
        );
      })}
    </ul>
  );
};

export default Navigator;
