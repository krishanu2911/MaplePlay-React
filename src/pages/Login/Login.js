import React, { useState } from "react";
import "../../App.css";
function Login() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="maple-flex-xy-center">
      <section className="maple-flex-col-xy-center gap-m">
        <div className="flex-column width-100">
          <label className="lightcolor txt-lg bold-font">Email</label>
          <input type="text" placeholder="user Email" />
        </div>
        <div className="flex-column width-100">
          <label className="lightcolor txt-lg bold-font">Password</label>
          <div className="maple-flex gap-m">
            <input
              type={showPass ? "text" : "password"}
              placeholder="enter password"
            />
            <button
              className="filterBtn padding-sm txt-m boldest-font"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button className="filterBtn padding-sm txt-lg boldest-font width-100">
          Login
        </button>
      </section>
    </div>
  );
}
export default Login;