import Nav from "@/components/Nav";

function LandingLayout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default LandingLayout;
