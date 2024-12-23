import React from 'react';
import { NavLink } from 'react-router-dom';
import { Ambulance } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavigationItem {
  id: string;
  name: string;
  icon: LucideIcon;
  path: string;
}

interface SidebarProps {
  navigation: NavigationItem[];
}

export default function Sidebar({ navigation }: SidebarProps) {
  return (
    <div className="w-20 md:w-64 bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <Ambulance className="w-8 h-8 text-blue-600" />
          <span className="hidden md:inline font-bold text-xl">AmbulanceOS</span>
        </div>
      </div>
      <nav className="mt-8">
        {navigation.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center p-4 hover:bg-gray-50 ${
                isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`
            }
          >
            <item.icon className="w-6 h-6" />
            <span className="hidden md:inline ml-3">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}