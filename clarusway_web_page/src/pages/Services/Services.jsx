import "./services.scss";
function Services() {
  return (
    <main className="servicesmain">
      <div className="subscribe">
        <h3>Subscribe To Our Newsletter</h3>
        <div>
          <input type="text" placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="maincontainer">
        <div className="services">
          <h3>Services</h3>
          <div>
            <h3>Website Design</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium eos earum, ut nemo explicabo illo minus? Ipsa suscipit
              minima mollitia!
            </p>
            <p>Pricing: $1,000 - $3,000</p>
          </div>
          <div>
            <h3>Website Maintenance</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium eos earum, ut nemo explicabo illo minus? Ipsa suscipit
              minima mollitia!
            </p>
            <p>Pricing: $250 per mount</p>
          </div>
          <div>
            <h3>Website Hosting</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium eos earum, ut nemo explicabo illo minus? Ipsa suscipit
              minima mollitia!
            </p>
            <p>Pricing: $25 per month</p>
          </div>
        </div>
        <div className="quote">
          <div>
            <h3>Get A Quote</h3>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
