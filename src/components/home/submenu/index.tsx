"use client";

import Link from "next/link";
import styles from "./styles.module.scss";

import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuProps } from "../../../utils/menu.type";

interface SubMenuProp {
  menu: MenuProps;
}

export function Submenu({ menu }: SubMenuProp) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className={styles.submenu}>
      <div onClick={toggleMenu} className={styles.submenuIcon}>
        <Menu size={34} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        <li>
          <Link href={"/post/pagina-1"}>Página 1</Link>
        </li>
        <li>
          <Link href={"/post/pagina-1"}>Página 2</Link>
        </li>
      </ul>
    </section>
  );
}
