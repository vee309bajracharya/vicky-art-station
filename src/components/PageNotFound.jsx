import ErrorImg from "../assets/svg/error.svg";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <img
        src={ErrorImg}
        alt="404 Error Image"
        className="xs:w-52 xs:h-52 md:w-96 md:h-96"
      />

      {/* back to home button */}
      <Link to="/">
        <button className="mainBtn">Back to Home</button>
      </Link>
    </section>
  );
};

export default PageNotFound;
