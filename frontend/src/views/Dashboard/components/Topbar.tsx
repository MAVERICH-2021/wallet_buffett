import { login } from "@/api/userApi";
import { IconBack, IconNotification } from "@/assets/icons/icons";
import { useResponsiveDisplay } from "@/hooks/useResponsiveDisplay";
import { backToUpperPath } from "@/router";
import { useState } from "react";

const Topbar = () => {
  //test purpose
  const [userLogin, setUserLogin] = useState(false);
  const [formShow, setFormShow] = useState(false);
  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div className=" absolute h-screen w-screen ">
        <div className=" absolute h-screen w-screen  bg-black bg-opacity-20">
          overlay
        </div>
        <div className="card m-auto w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <input
              type="text"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  login({ email: email, password: password });
                  setFormShow(false);
                }}
                className="btn btn-primary"
              >
                Login In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const isMobile = useResponsiveDisplay();
  return (
    <div className=" grow-0 min-h-[32px] bg-primary-content bg-opacity-80  flex flex-row justify-between">
      {formShow && <LoginForm />}

      {isMobile && (
        <div
          className=" btn btn-ghost text-lg my-auto  bg-primary-content"
          onClick={() => backToUpperPath()}
        >
          <IconBack />
        </div>
      )}
      <div className="title text-lg font-bold my-auto ml-4">Wallet Buffett</div>
      {userLogin ? (
        <div className="avatar">
          <div className="w-8 h-8 my-auto ml-4 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setFormShow(true)}
          className="btn btn-xs text-sm btn-secondary"
        >
          Login
        </div>
      )}
      <div className="indicator m-3 mr-8 ">
        <span className="indicator-item ">
          <div className=" h-2 w-2 rounded-full bg-secondary"></div>
        </span>
        <button className="btn btn-xs text-lg">
          <IconNotification />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
