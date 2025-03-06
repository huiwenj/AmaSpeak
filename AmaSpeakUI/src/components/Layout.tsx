import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex space-x-4">
          <Link
            to="/chat"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Chat
          </Link>
          <Link
            to="/profile"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Profile
          </Link>
        </div>
      </nav>
      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}
