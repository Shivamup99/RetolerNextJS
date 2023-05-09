import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FcAbout, FcHome } from "react-icons/fc";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={visible ? "navbar show" : "navbar hide"}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-lg-start ">
          <Image src="/assets/logo.png" width={52} height={42} alt="logo" />
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center  mb-md-0 px-4">
            <li>
              <Link href="/" className="nav-link px-2 link-secondary" passHref>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="nav-link px-2 link-body-emphasis"
                passHref
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-link px-2 link-body-emphasis"
                passHref
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/location"
                className="nav-link px-2 link-body-emphasis"
              >
                Locations
              </Link>
            </li>
          </ul>

          <div className="dropdown text-end" style={{ marginLeft: "49rem" }}>
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image
                src="/assets/shiva.jpg"
                alt="mdo"
                width={32}
                height={32}
                className="rounded-circle img-fluid"
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <Link className="dropdown-item" href="/search" passHref>
                  <BsSearch />
                  <span> Search </span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/search?purpose=for-sale">
                  <FcAbout />
                  <span>Buy Property</span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/search?purpose=for-rent">
                  <FcHome />
                  <span>Rent Property</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
