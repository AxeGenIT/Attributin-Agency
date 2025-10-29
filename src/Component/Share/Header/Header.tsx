"use client";
import Image from "next/image";
import MenuBar from "./component/Menubar";
import Button from "@/utils/Button";
import StaggeredMenu from "@/components/StaggeredMenu";

const Header = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];
  return (
    <div className="bg-transparent">
      <div className="container hidden md:hidden lg:block py-4 px-2  bg-transparent">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Attribution booster"
              height={40}
              width={180}
            />
          </div>
          {/* NavLink */}
          <MenuBar />
          {/* Button */}
          <Button />
        </div>
      </div>
      <div className="container block md:block lg:hidden">
        <div style={{ height: "20vh" }}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl="/logo.png"
            accentColor="#5227ff"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
            isFixed={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
