import Footers from "./Footers";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footers />
    </>
  );
};

export default Layout;
