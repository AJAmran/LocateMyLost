"use client";

import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    setIsOpen(false);
    router.push(pathname);
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <Avatar
        className="cursor-pointer"
        name="Joe"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 z-50">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <button
                onClick={() => handleNavigation("/profile")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/profile/settings")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/profile/create-post")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Create Post
              </button>
            </li>
            <li>
              <button
                onClick={() => console.log("Logging out")}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
