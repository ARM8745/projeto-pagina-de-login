import React, { useState } from "react";
import "./LoginPage.css";
import "./simbolo.png";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }

  function handleSocial(provider) {
    alert(`Login com ${provider}`);
  }

  return (
    <div className="login-container">
      <div className="header-trapezoid">
        <img
          src="simbolo.png"
          alt="Infinity School"
          className="header-logo"
        />
        <span className="header-title">Infinity School</span>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
      <div className="login-or">ou entre com</div>
      <div className="login-social">
        <button
          className="login-social-btn linkedin"
          onClick={() => handleSocial("LinkedIn")}
          type="button"
        >
          LinkedIn
        </button>
        <button
          className="login-social-btn google"
          onClick={() => handleSocial("Google")}
          type="button"
        >
          Google
        </button>
        <button
          className="login-social-btn facebook"
          onClick={() => handleSocial("Facebook")}
          type="button"
        >
          Facebook
        </button>
      </div>
    </div>
  );
}