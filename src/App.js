import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="body">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <img src="./logo.png" alt="" />
            <h1 className="title">
              <span className="fade fadeOne">COMING</span>
              <span className="fade fadeTwo">SOON</span>
            </h1>
            <h2 className="subtitle">
              <p className="countdown fade fadeThree">
                Your favorite sarees, suiting & shirting fabrics, and trendy
                outfits are just a few clicks away. Our online store is
                launching soon to bring fashion to your doorstep!
              </p>
            </h2>
          </div>
        </div>
      </section>
      <div className="footer">
        <div className="venture">
          <h3>A Joint Venture by</h3>
          <p>Sri Shyam Kanchi Saree House & Vishnuspire</p>
        </div>
        <div className="icons">
          <span>🚚 Fast Delivery</span>
          <span>🌍 Global Reach</span>
        </div>
        <div className="contact">
          <p>📧: SHYAMSILKS@GMAIL.COM</p>
          <p>🌐: WWW.SHYAMSILKS.COM</p>
        </div>
      </div>
    </div>
  );
}
