import LandingNavbar from "@/components/LandingNavbar";
const LandingLayout = ({ children }) => {
  return (
    <div>
      <LandingNavbar />
      {children}
    </div>
  );
};

export default LandingLayout;
