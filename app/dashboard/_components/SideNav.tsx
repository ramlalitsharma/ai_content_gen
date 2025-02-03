"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings } from 'lucide-react';
import clsx from "clsx";

// Type definition for menu items
type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

export default function SideNav() {
  const path = usePathname();
  const MenuList: MenuItem[] = [
    {
      name: 'Home',
      icon: <Home className="w-5 h-5" />,
      path: "/dashboard"
    },
    {
      name: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/dashboard/settings'
    }
  ];

  return (
    <aside className="h-screen p-3 border-r bg-white w-64">
      <div className="flex items-center justify-center mb-4">
        <Image 
          src="/logo.svg" 
          alt="Company Logo" 
          width={150}
          height={50}
          className="object-contain"
          priority
        />
      </div>
      
      <nav aria-label="Main navigation">
        <ul className="space-y-1">
          {MenuList.map((menu) => (
            <li key={menu.path}>
              <Link
                href={menu.path}
                className={clsx(
                  "flex items-center gap-3 p-3 rounded-lg transition-colors",
                  "hover:bg-blue-500 hover:text-white",
                  {
                    "bg-blue-500 text-white": path === menu.path,
                    "text-gray-700": path !== menu.path
                  }
                )}
                aria-current={path === menu.path ? "page" : undefined}
              >
                {menu.icon}
                <span className="text-lg font-medium">{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}