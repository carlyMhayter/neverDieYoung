import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { links } from 'utils/linksData';
import styles from '../styles/component-styles/NavBar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect watches a global click event variable, and if a click occurs anywhere other than the dropdown menu
  // while the menu is open, the dropdown menu closes
  useEffect(() => {
    document.addEventListener('click', (event) => {
      const target1 = event.target.className;
      if (isOpen && target1 !== styles.menuimg) {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.linkContainer} ${styles.navBarLinks}`}>
        <div id="longDisplay" className={styles.textlinks}>
          {links.map((link) => (
            <div className={styles.navlink} key={link.linkName}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href={link.linkLoc}>
                <a> {link.linkName} </a>
              </Link>
            </div>
          ))}
        </div>
        <div className={`${styles.navlink} ${styles.imglink}`}>
          <Link href="/">
            <a>
              <img
                alt="Never Die Young Logo, with text and guitar"
                className={styles.logoimage}
                src="./never-die-young-logo-mini3.svg"
              />
            </a>
          </Link>
        </div>

        {/* drop down menu button which only appears on small screen size */}
        <div className="dropdown">
          <button
            type="button"
            className={styles.dropdownBtn}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            onKeyDown={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MenuIcon className={styles.menuimg}/>
          </button>

          {isOpen && (
            <div
              id="myDropdown"
              className={`${styles.textlinks} ${styles.dropdowncontent}`}
            >
              {links.map((link) => (
                <div className={styles.navlink} key={link.linkName}>
                  <Link href={link.linkLoc}>
                    <a> {link.linkName} </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
