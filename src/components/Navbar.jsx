import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  // console.log(user)

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center text-white px-4 sm:px-[50px] z-[100] w-full absolute h-[75px] ">
      <Link to="/">
        <div>
          <p className="text-4xl font-extrabold text-[var(--primary-color)]  ">
            Netflix
          </p>
        </div>
      </Link>

      {user?.email ? (
        <div className="flex gap-4 ">
          <Link to="/account">
            <button className="font-bold px-3 py-2">account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="font-bold px-3 py-2 rounded-lg text-white bg-[var(--primary-color)]"
          >
            logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4 ">
          <Link to="/login">
            <button className="font-bold px-3 py-2">SignIn</button>
          </Link>
          <Link to="/signup">
            <button className="font-bold px-3 py-2 rounded-lg text-white bg-[var(--primary-color)]">
              SignUp
            </button>
          </Link>
        </div>
      )}
      {/* <div className="flex gap-4 ">
        <Link to="/login">
          <button className="font-bold px-3 py-2">SignIn</button>
        </Link>
        <Link to="/signup">
          <button className="font-bold px-3 py-2 rounded-lg text-white bg-[var(--primary-color)]">
            SignUp
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
