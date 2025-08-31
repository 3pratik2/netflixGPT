import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  onAuthStateChanged(auth, (user) => {
    if(user) {
      //sign in case
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    } else {
      // sign out case
      dispatch(removeUser());
    }
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
