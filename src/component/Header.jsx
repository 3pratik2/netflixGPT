import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { avatar } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // cleanup
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-full px-[3rem] py-2 bg-gradient-to-b from-black z-50 flex items-center justify-between">
      <img
        className="w-44"
        src={avatar}
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
