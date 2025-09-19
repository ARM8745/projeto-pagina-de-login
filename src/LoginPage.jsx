import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import simbolo from "./simbolo.png";
import lg1 from "./lg1.png";
import lg2 from "./lg2.png";
import lg3 from "./lg3.png";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [manterConectado, setManterConectado] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = [lg1, lg2, lg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Calcula a ordem das imagens para o carrossel circular
  const getCircleImages = () => {
    return [
      carouselImages[carouselIndex],
      carouselImages[(carouselIndex + 1) % carouselImages.length],
      carouselImages[(carouselIndex + 2) % carouselImages.length],
    ];
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }



  return (
    <div className="main-bg">
      <div className="login-side">
        <div className="login-box">
          <div className="login-logo-area">
            <img src={simbolo} alt="IN" className="login-logo-img" />
            <span className="login-logo-title">INFINITY SCHOOL</span>
          </div>
          <h2 className="login-title">ENTRE NA SUA CONTA</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="login-label">E-MAIL</label>
            <input
              id="email"
              type="email"
              placeholder="DIGITE SEU EMAIL"
              className="login-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor="senha" className="login-label">SENHA</label>
            <div className="login-password-box">
              <input
                id="senha"
                type="password"
                placeholder="DIGITE SUA SENHA"
                className="login-input"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                required
              />
                <img src={require('./Frame.png')} alt="Frame" className="login-eye" />
            </div>
            <button type="submit" className="login-btn" disabled={loading}>
              FAZER LOGIN
            </button>
          </form>
          <div className="login-options">
            <label className="login-switch">
              <input type="checkbox" checked={manterConectado} onChange={e => setManterConectado(e.target.checked)} />
              <span className="login-switch-slider"></span>
              CONTINUAR CONECTADO
            </label>
            <a href="/esqueci-senha" className="login-link">ESQUECI MINHA SENHA</a>
          </div>
          <div className="login-divider"></div>
          {/* Botões de login social removidos conforme solicitado */}
          <div className="login-register">
            AINDA NÃO TEM CADASTRO? <a href="/criar-conta" className="login-link">CRIE UMA CONTA.</a>
          </div>
        </div>
      </div>
      <div className="highlight-side">
        <div className="highlight-bg">
          {/* Hexagon background can be a background image or SVG via CSS */}
        </div>
        <div className="highlight-circles">
          {getCircleImages().map((img, idx) => (
            <div className="highlight-circle" key={idx}>
              <img src={img} alt={`Curso ${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className="highlight-dots">
          {carouselImages.map((_, idx) => (
            <span key={idx} className={`dot${carouselIndex === idx ? ' active' : ''}`}></span>
          ))}
        </div>
  <div className="highlight-title">Cadastre seu portfólio</div>
  <div className="highlight-desc">Tenha acesso às melhores oportunidades de trabalho das nossas empresas parceiras!</div>

      </div>
    </div>
  );
}