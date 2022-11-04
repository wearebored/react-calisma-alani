import "./about.scss";
function About() {
  return (
    <main className="about">
      <div className="newsletter">
        <h3>Subscribe To Our Newsletter</h3>
        <div>
          <input type="text" placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="metin">
        <div className="aboutus">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit
            at dicta necessitatibus laboriosam esse mollitia nemo maxime
            voluptatem quam commodi officiis ut minus quod laudantium saepe
            minima quaerat, fugit suscipit tempore obcaecati? Dolor eveniet
            expedita distinctio dignissimos iste itaque Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rerum odit at dicta
            necessitatibus laboriosam esse mollitia nemo maxime voluptatem quam
            commodi officiis ut minus quod laudantium saepe minima quaerat,
            fugit suscipit tempore obcaecati? Dolor eveniet expedita distinctio
            dignissimos iste itaque.
          </p>
          <p className="renkli">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            perspiciatis dignissimos cupiditate, eius maxime, qui est voluptas
            ipsam porro quisquam quis quidem excepturi exercitationem, expedita
            temporibus dolorem placeat ducimus consequatur dicta fugit incidunt
            totam odit commodi autem? Neque, reprehenderit. Aperiam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Rerum odit at dicta
            necessitatibus laboriosam esse mollitia nemo maxime voluptatem quam
            commodi officiis ut minus quod laudantium saepe minima quaerat,
            fugit suscipit tempore obcaecati? Dolor eveniet expedita distinctio
            dignissimos iste itaque.
          </p>
        </div>
        <div className="wedo">
          <div>
            <h4>What We Do</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              aut? Modi quam voluptas eaque nam obcaecati voluptates corporis
              totam, in vel quo rerum sed. Magnam enim beatae fugiat distinctio
              repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              aut? Modi quam voluptas eaque nam obcaecati voluptates corporis
              totam, in vel quo rerum sed. Magnam enim beatae fugiat distinctio
              repudiandae.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
