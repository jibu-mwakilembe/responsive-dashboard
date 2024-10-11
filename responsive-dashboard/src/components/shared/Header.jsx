import React from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import classNames from "classnames";

function Header() {
  return (
    <div className="h-16 bg-white px-4 flex justify-between items-center">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-11"
        />
      </div>
      <div className="flex items-center gap-4 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 "
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col  z-10 mt-2.5 w-88"
              >
                <div className="bg-white rounded-sm shadow-md  ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                  <strong className="text-gray-700 font-medium">message</strong>
                  <div className="mt-2 py-1 text-sm">
                    This is message pannel.
                  </div>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 "
                )}
              >
                <HiOutlineBell fontSize={24} />
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col  z-10 mt-2.5 w-88"
              >
                <div className="bg-white rounded-sm shadow-md w-188 mr-5 ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                  <strong className="text-gray-700 font-medium">
                    Notification
                  </strong>
                  <div className="mt-2 py-1 text-sm">
                    This is notification pannel.
                  </div>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className="sr-only">open user menu</span>
            <div
              className="h-10 w-10 bg-sky-500 bg-cover rounded-full bg-no-repeat bg-center"
              style={{ backgroundImage: 'url("./src/assets/tree.PNG")' }}
            >
              <span className="sr-only">Jibu Mwakilembe</span>
            </div>
          </MenuButton>
          <MenuItems
            anchor="bottom start"
            className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none"
          >
            <MenuItem>
              <a
                className="block px-4 py-2  data-[focus]:bg-blue-100"
                href="/profile"
              >
                Your Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="block px-4 py-2  data-[focus]:bg-blue-100"
                href="/setting"
              >
                Setting
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="block px-4 py-2 data-[focus]:bg-blue-100"
                href="/license"
              >
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
