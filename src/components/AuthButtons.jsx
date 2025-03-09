import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions";

const AuthButtons = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      <h1>{isLoggedIn ? "Giriş etdiniz" : "Giriş etməmisiniz"}</h1>
      <button onClick={() => dispatch(login())} disabled={isLoggedIn}>
        Giriş et
      </button>
      <button onClick={() => dispatch(logout())} disabled={!isLoggedIn}>
        Çıxış et
      </button>
    </div>
  );
};

export default AuthButtons;
