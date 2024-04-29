// import library
import React, { useState } from "react";

// impot component
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownMenu,
  Avatar,
  DropdownTrigger,
  Dropdown,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher";
import Login from "./login/Login"
import SignupButton from "../signup/SignupButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import useLogout from "../../hooks/useLogout";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { authUser } = useAuthContext()
  const { loading, logout } = useLogout()

  const menuItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Our Team",
      href: "#team",
    },
    {
      name: "Reviews",
      href: "#reviews",
    },
    {
      name: "Contact Us",
      href: "#contactus",
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
        {menuItems.map((menuitem, index) => (
          <NavbarItem>
            <Link color="foreground" href={menuitem.href} className={index === menuItems.length - 1 ? "hidden" : "block"}>
              {menuitem.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Link to={"/login"} color="secondary" className={`font-medium text-secondary-600 hover:text-secondary-400 ${authUser ? "hidden" : "flex"}`}>
            Login
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to={"/signup"}>
            <SignupButton />
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarContent as="div" justify="end" className={`${authUser ? "flex":"hidden"}`}>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={authUser ? authUser.fullName : ""}
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{authUser ? authUser.email : ""}</p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={logout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>

            <Link onClick={() => item.name === <Login /> ? setIsMenuOpen(isMenuOpen) : setIsMenuOpen(!isMenuOpen)}
              className="w-full hover:bg-purple-200"
              color={
                index === menuItems.length - 1 ? "secondary" : "foreground"
              }
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
