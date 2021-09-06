import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="Notfound">
      Not found
      <p>
        <Link to="/">
          Back to home
        </Link>
      </p>
    </div>
  );
}

export default Notfound;