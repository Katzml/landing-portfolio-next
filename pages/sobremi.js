import Layout from "../components/Layout";
const Sobremi = () => {
  const computerImageLink =
    "https://res.cloudinary.com/dv6wtaeqq/image/upload/v1594183134/computer-and-man_ldnmzl.svg";
  return (
    <Layout>
      <div className="columns">
        <img className="about-image column" src={computerImageLink} />
        <p className="column content is-medium">
          Soy una persona curiosa y apasionada por la tecnologia en general, lo
          que mas me gusta es el desarrollo en front-end
        </p>
      </div>
      <div className="columns">
        <div className="column">
          <h3 className="title is-2">Habilidades</h3>
          <span className="subtitle is-4 ">Lenguajes</span>
          <p className="skills--position">HTML, CSS, JavaScript, Node.js</p>
          <span className="subtitle is-4 ">Frameworks</span>
          <p className="skills--position">Vue, React, Next, Bulma, Express</p>
          <span className="subtitle is-4 ">Herramientas</span>
          <p className="skills--position">Git, gestores de paquetes, Webpack</p>
        </div>
        <div className="column">
          <h3 className="title is-3">Mis Principios</h3>
          <ul>
            <li className="content is-large">Investigación y experimentación</li>
            <li className="content is-large">Aprender algo nuevo todos los dias</li>
            <li className="content is-large">Buenas practicas y estandares</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Sobremi;
