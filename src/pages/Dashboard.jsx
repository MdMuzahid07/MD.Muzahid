import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);
  return <div className="min-h-screen w-full bg-red-500">Dashboard</div>;
};

export default Dashboard;
