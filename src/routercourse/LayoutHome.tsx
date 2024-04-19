import { Link, Outlet } from "react-router-dom";

const LayoutHome: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/about/1?name=bam">About</Link>
          </li>
          <li>
            <Link to="/home/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default LayoutHome;
