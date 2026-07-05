import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import StatCard from "../components/Dashboard/StatCard";
import RecentActivity from "../components/Dashboard/RecentActivity";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <div className="p-8">

                    <div className="grid gap-6 md:grid-cols-3">

                        <StatCard
                            title="Projects"
                            value="12"
                        />

                        <StatCard
                            title="Completed"
                            value="84"
                        />

                        <StatCard
                            title="Pending"
                            value="7"
                        />

                    </div>

                    <RecentActivity />

                </div>

            </div>

        </div>
    );
};

export default Dashboard;



// import { FaHome, FaUser, FaSignOutAlt, FaCode, FaProjectDiagram } from "react-icons/fa";

// const Dashboard = () => {
//     return (
//         <div className="min-h-screen bg-gray-100 flex">

//             {/* Sidebar */}
//             <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
//                 <div className="text-2xl font-bold p-6 border-b border-gray-700">
//                     DevHub
//                 </div>

//                 <nav className="flex-1 p-4 space-y-2">
//                     <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-800">
//                         <FaHome />
//                         Dashboard
//                     </button>

//                     <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-800">
//                         <FaProjectDiagram />
//                         Projects
//                     </button>

//                     <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-800">
//                         <FaCode />
//                         Tasks
//                     </button>

//                     <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-800">
//                         <FaUser />
//                         Profile
//                     </button>
//                 </nav>

//                 <div className="p-4 border-t border-gray-700">
//                     <button className="flex items-center gap-3 text-red-400 hover:text-red-500">
//                         <FaSignOutAlt />
//                         Logout
//                     </button>
//                 </div>
//             </aside>

//             {/* Main Content */}
//             <div className="flex-1">

//                 {/* Navbar */}
//                 <header className="bg-white shadow px-8 py-5 flex justify-between items-center">
//                     <div>
//                         <h1 className="text-2xl font-bold">
//                             Welcome Back 👋
//                         </h1>
//                         <p className="text-gray-500">
//                             Have a productive day.
//                         </p>
//                     </div>

//                     <div className="flex items-center gap-3">
//                         <img
//                             src="https://i.pravatar.cc/100"
//                             alt="Profile"
//                             className="w-11 h-11 rounded-full"
//                         />

//                         <div>
//                             <p className="font-semibold">
//                                 Abhishek
//                             </p>
//                             <p className="text-sm text-gray-500">
//                                 Developer
//                             </p>
//                         </div>
//                     </div>
//                 </header>

//                 {/* Dashboard */}
//                 <main className="p-8">

//                     {/* Cards */}
//                     <div className="grid md:grid-cols-3 gap-6">

//                         <div className="bg-white rounded-xl shadow p-6">
//                             <h2 className="text-gray-500">
//                                 Total Projects
//                             </h2>

//                             <h1 className="text-4xl font-bold mt-2">
//                                 12
//                             </h1>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-6">
//                             <h2 className="text-gray-500">
//                                 Tasks Completed
//                             </h2>

//                             <h1 className="text-4xl font-bold mt-2">
//                                 84
//                             </h1>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-6">
//                             <h2 className="text-gray-500">
//                                 Pending Tasks
//                             </h2>

//                             <h1 className="text-4xl font-bold mt-2 text-amber-500">
//                                 7
//                             </h1>
//                         </div>

//                     </div>

//                     {/* Recent Activity */}
//                     <div className="bg-white rounded-xl shadow mt-8 p-6">
//                         <h2 className="text-xl font-bold mb-4">
//                             Recent Activity
//                         </h2>

//                         <table className="w-full">
//                             <thead>
//                                 <tr className="text-left border-b">
//                                     <th className="py-3">Project</th>
//                                     <th>Status</th>
//                                     <th>Date</th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 <tr className="border-b">
//                                     <td className="py-3">Portfolio Website</td>
//                                     <td className="text-green-600">Completed</td>
//                                     <td>Today</td>
//                                 </tr>

//                                 <tr className="border-b">
//                                     <td className="py-3">Authentication API</td>
//                                     <td className="text-yellow-500">In Progress</td>
//                                     <td>Yesterday</td>
//                                 </tr>

//                                 <tr>
//                                     <td className="py-3">React Dashboard</td>
//                                     <td className="text-blue-600">Started</td>
//                                     <td>2 days ago</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                 </main>

//             </div>

//         </div>
//     );
// };

// export default Dashboard;