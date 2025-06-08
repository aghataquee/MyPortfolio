import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Global.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;