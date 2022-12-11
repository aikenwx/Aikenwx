import Link from "next/link";
import React from "react";
import { NAV_MENU_ITEMS } from "../../../common/constants";

interface IProps {
    setIsMobileVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarMobileMenu: React.FC<IProps> = ({ setIsMobileVisible }) => {
    const handleClick = () => setTimeout(() => setIsMobileVisible(false), 100);

    return (
        <div className="sm:hidden h-screen">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {NAV_MENU_ITEMS.map((menuItem) => (
                    <Link
                        onClick={handleClick}
                        key={menuItem.value}
                        href={menuItem.path}
                        className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        {menuItem.value}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavBarMobileMenu;
