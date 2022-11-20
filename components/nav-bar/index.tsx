import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import NavBarDefaultMenu from "./nav-bar-default-menu";
import NavBarMobileMenu from "./nav-bar-mobile-menu";
import NavBarLogo from "./nav-bar-logo";
import Link from "next/link";

const NavBar: React.FC = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const handleMobileMenuClick = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    return (
        <nav className="bg-white  dark:bg-gray-900 fixed right-0 left-0">
            <div className="flex flex-wrap justify-between items-center mx-auto px-4 py-3">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-xl whitespace-nowrap dark:text-white">
                        <NavBarLogo />
                    </span>
                </Link>
                <button
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={handleMobileMenuClick}
                >
                    <span className="sr-only">Open main menu</span>
                    <MenuOutlined />
                </button>
                <NavBarDefaultMenu />
            </div>
            {isMobileMenuVisible && <NavBarMobileMenu />}
        </nav>
    );
};

export default NavBar;
