// import library
import React from "react";

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
import SignupButton from "../signup/SignupButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import useLogout from "../../hooks/useLogout";
import { menuItems } from "../../_Details";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { authUser } = useAuthContext()
  const { loading, logout } = useLogout()

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
          <NavbarItem key={menuitem.name} className={`${authUser ? (`${index === 2 ? 'hidden' : 'block'}`) : ''} hover:text-purple-800 font-medium py-1 px-1.5 hover:scale-105 transition-all duration-100 cursor-pointer`}>
            <a color="foreground" href={menuitem.href}>
              {menuitem.name}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Link to={"/login"} color="secondary" className={`font-medium text-secondary-600 hover:text-secondary-400 ${authUser ? "hidden" : "flex"}`}>
            <Button variant="flat" color="secondary" className="bg-transparent font-bold text-md">Login</Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to={"/signup"}>
            <SignupButton />
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarContent as="div" justify="end" className={`${authUser ? "flex" : "hidden"}`}>
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
            <DropdownItem key="logout" color="danger" onClick={logout} >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="w-full hover:bg-purple-100 py-1 px-1.5 hover:scale-105 transition-all duration-100">
            <a onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
            >
              {item.name}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
