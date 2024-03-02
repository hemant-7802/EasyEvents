// import library
import React, { useState } from "react";

// impot component
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Button,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher";
import Login from "./login/Login"
import SignupButton from "../signup/SignupButton";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name:"Home",
      href: "#home",
  },
    {
      name:"Services",
      href:"#services",
    },
    {
      name:"Our Team",
      href:"#team",
    },
    {
      name:"Reviews",
      href:"#reviews",
    },
    {
      name:"Contact Us",
      href:"#contactus",
    },
    {
      name: "Login",
    }
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden bg-red- pr-2" justify="center">
        <NavbarBrand>
          <img
            src="https://i.postimg.cc/65vLNbQz/2.png"
            width={250}
            alt="EasyVents"
            className=" class iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img
            src="https://i.postimg.cc/65vLNbQz/2.png"
            width={220}
            alt="Easyvents"
            className=" iPhone4and4S:max-w-[7rem] iPhone4and4S:-mr-6 iPhone4and4S:dark:contrast-200 iPhone4and4S:dark:saturate-200"
          />
        </NavbarBrand>
        <NavbarItem>
        <Link color="foreground" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#team">
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#reviews">
            Reviews
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contactus">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher/>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link color="secondary" className="dark:font-semibold cursor-pointer">
            <Login/>
          </Link>
        </NavbarItem>
        <NavbarItem>
            <SignupButton/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
          
            <Link onClick={() => item.name === <Login/> ? setIsMenuOpen(isMenuOpen): setIsMenuOpen(!isMenuOpen)}
              className="w-full hover:bg-purple-200"
              color="foreground"
              // color={
              //   index === menuItems.length - 1 ? "secondary" : "foreground"
              // }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
