const DashboardPage = () => {
  return (
    <div className="p-6">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
        <p className="text-gray-600">Here is your admin dashboard overview.</p>
      </div>

      {/* Add more dashboard content below */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-gray-700">Total Products</h3>
          <p className="text-2xl font-bold text-indigo-600">120</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-gray-700">Orders</h3>
          <p className="text-2xl font-bold text-indigo-600">35</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-gray-700">New Users</h3>
          <p className="text-2xl font-bold text-indigo-600">8</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold text-gray-700">Revenue</h3>
          <p className="text-2xl font-bold text-indigo-600">$10,000</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
