import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                МедУчет
              </span>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/doctors"
                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/doctors'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Доктора
              </Link>
              <Link
                to="/nurses"
                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/nurses'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Медсестры
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default Layout