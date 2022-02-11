import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { links } from 'utils/linksData';
// import { MenuIcon } from '@material-ui/icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect watches a global click event variable, and if a click occurs anywhere other than the dropdown menu
  // while the menu is open, the dropdown menu closes
  useEffect(() => {
    document.addEventListener('click', (event) => {
      const target1 = event.target.className;
      if (isOpen && target1 !== 'dropdown-menu-button-img') {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="link-container navbar-links">
        <div id="longDisplay" className="text-links ">
          {links.map((link) => (
            <div className="navlink" key={link.linkName}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href={link.linkLoc}>
                <a> {link.linkName} </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="navlink img-link">
          <Link href="/">
            <a>
              <img
                alt="Never Die Young Logo, with text and guitar"
                className="logo-image"
                src="./never-die-young-logo-mini3.svg"
              />
            </a>
          </Link>
        </div>

        {/* drop down menu button which only appears on small screen size */}
        <div className="dropdown">
          <button
            type="button"
            id="dropdown-menu-button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            onKeyDown={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              alt="dropdown menu button"
              className="dropdown-menu-button-img"
              src="/menu-bars.svg"
            />
            {/* <MenuIcon fontSize="large" /> */}
          </button>

          {/* show the dropdown menu options */}
          {isOpen && (
            <div id="myDropdown" className="text-links dropdown-content">
              {links.map((link) => (
                <div className="navlink" key={link.linkName}>
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
