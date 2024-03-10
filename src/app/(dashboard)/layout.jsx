import DashboardNavbar from "@/components/DashboardNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
