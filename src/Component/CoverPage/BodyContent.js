const BodyContent = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FAVORITES <br />FOOD DELEVERED <br />HOT & FRESH.</h1>
        <p>
          Healthy switcher chefs do all the prep work, like
          peeding, chopping & marinating, so you can cook
          a fresh food.
        </p>

        <div className="hero-btn">
          <button className="orderBtn">Order Now</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="" alt="amazon-logo" />
            <img src="" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/homee.png" alt="hero" className="homeFood" />
      </div>
    </main>
  );
};

export default BodyContent;