"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    setIsOpen(false);
    router.push(pathname);
  };

  return (
    <div className="relative">
      {/* Avatar Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"
      >
        <span className="text-sm font-medium text-gray-800">J</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <button
                onClick={() => handleNavigation("/profile")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/profile/settings")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/profile/create-post")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Create Post
              </button>
            </li>
            <li>
              <button
                onClick={() => console.log("Logging out")}
                className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
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
