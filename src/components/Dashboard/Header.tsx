const Header = () => {
  return (
    <header className="bg-white shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
