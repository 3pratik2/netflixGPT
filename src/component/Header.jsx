import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };
  

  return (
    <div className="absolute w-full px-[3rem] py-2 bg-gradient-to-b from-black z-50 flex items-center justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix_logo"
      />

      {user && (
        <div className="flex h-[60%] items-center">
          <button
            className="text-1xl font-bold px-2 rounded-md hover:bg-red-700 text-white bg-red-600"
            onClick={handleSignOut}
          >
            Log Out
          </button>
          <img
            className="w-12 h-12 rounded-md mx-1"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="user_avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
