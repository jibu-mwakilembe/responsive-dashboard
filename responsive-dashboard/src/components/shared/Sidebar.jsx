import React from "react";
import classNames from "classnames";
import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/Navigation";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const classLink =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col w-60 p-3 bg-neutral-900 text-teal-200">
        <div className="flex items-center gap-2 px-1 py-3">
          <FcBullish fontSize={24} />
          <span className="text-neutral-100 text-lg">OpenShop</span>
        </div>
        <div className="flex-1 py-0 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink item={item} key={item.key} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink item={item} key={item.key} />
          ))}
          <div className={classNames("text-red-500 cursor-pointer", classLink)}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white" : "text-neutral-400",
        classLink
      )}
    >
      {item.icon}
      <span className="text-xl">{item.label}</span>
    </Link>
  );
}
