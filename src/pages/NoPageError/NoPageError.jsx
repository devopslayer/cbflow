import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function NoPageError() {
  return (
    <div className="container p-5">
      <div className="text-center">
        <h1 className="display-4">404 - Page Not Found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link to="/cbflow/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NoPageError;
