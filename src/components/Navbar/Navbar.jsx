import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

export default function Navbar({ onClick }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1"></span>
        <div className="navbar-btn">
          <button
            className="btn btn-outline-primary"
            type="submit"
            onClick={onClick}
          >
            Save changes
          </button>
        </div>
      </div>
    </nav>
  );
}
