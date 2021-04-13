import { useState } from 'react';
import Link from 'next/link'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const Navbar = ({ bgColor, textColor, children }) => (
        <nav
            className={`${bgColor} ${textColor} font-light text-white md:relative md:flex md:items-center shadow py-2 px-4 md:flex md:flex-row md:justify-start`}
        >
            {children}
        </nav>
    );
    /* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
    Navbar.Brand = ({ children, href }) => (
        <a
            href={href}
            className="inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400"
        >
        <strong>{children}</strong>
        </a>
    );
    Navbar.Toggler = ({ toggle }) => (
        <button
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow"
            onClick={toggle}
        >
        &#8801;
        </button>
    );
    Navbar.Collapse = ({ children, isOpen }) => {
        const className = isOpen
        ? 'visible opacity-1 transition-all ease-out duration-500 md:transition-none'
        : 'invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto ';
        return (
        <div className={`${className} md:flex-grow md:items-center md:flex`}>
            {children}
        </div>
        );
    };
    Navbar.Nav = ({ children, left, right, center }) => {
        const className = left
        ? 'block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0'
        : right
        ? 'block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0'
        : center
        ? 'block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto '
        : 'block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0';
        return <ul className={className}>{children}</ul>;
    };
    Navbar.Item = ({ children }) => <li>{children}</li>;
    
    Navbar.Link = ({ children, href }) => (
        <Link  href={`${href}`}>
        <a
            className="block cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium"
        >
            {children}
        </a>
        </Link>
    );

    return (
        <Navbar bgColor="bg-black" textColor="text-white">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggler toggle={toggle} />
        <Navbar.Collapse isOpen={isOpen}>
          <Navbar.Nav right>
            <Navbar.Item>
              <Navbar.Link href="/">Home</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link href="/about">About</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
              <Navbar.Link href="/screen">Screen</Navbar.Link>
            </Navbar.Item>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar