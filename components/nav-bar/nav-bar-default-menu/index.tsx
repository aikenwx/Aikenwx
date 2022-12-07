import Link from "next/link";
import React from "react";
import { NAV_MENU_ITEMS } from "../../../common/constants";

const NavBarDefaultMenu: React.FC = () => {
    /**
     * @todo special text color for current page
     *
     *  */
    return (
        <div className="hidden w-full sm:block sm:w-auto">
            <ul className="flex flex-col sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0">
                {NAV_MENU_ITEMS.map((menuItem) => (
                    <Link
                        key={menuItem.value}
                        href={menuItem.path}
                        className="block pr-4 pl-3 text-gray-700 rounded hover:bg-slate-50 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                    >
                        {menuItem.value}
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default NavBarDefaultMenu;
