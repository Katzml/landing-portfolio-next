//@ts-nocheck
import Layout from "../components/Layout";
import CardProject from "../components/CardProject"

function Index() {
  const projectCards = [
    {
      title:"Project 1",
      description:"este es el proyecto 1",
      image:"https://www.redesinterculturales.org/wp-content/uploads/2017/05/sin-imagen.gif"
    },
    {
      title:"project 2",
      description:"este es el proyecto 2",
      image:"https://www.redesinterculturales.org/wp-content/uploads/2017/05/sin-imagen.gif"
    },
    {
      title:"project 3",
      description:"este es el proyecto 3",
      image:"https://www.redesinterculturales.org/wp-content/uploads/2017/05/sin-imagen.gif"
    },
    {
      title:"project 4",
      description:"este es el proyecto 4",
      image:"https://www.redesinterculturales.org/wp-content/uploads/2017/05/sin-imagen.gif"
    },
    {
      title:"project 5",
      description:"este es el proyecto 4",
      image:"https://www.redesinterculturales.org/wp-content/uploads/2017/05/sin-imagen.gif"
    },
  ]


  return (
    <Layout>
      <div className="home">
      <div className="init-section">
            <h1 className="title is-2">Hola! Soy Sebastian desarrollador de software en Santiago 🇨🇱</h1>
            <p className="content is-large">Bienvenido, mas abajo hay algunos trabajos que he hecho de manera personal</p>
      </div>
      <div className="columns is-multiline">
      {projectCards.map(projectCard=>{
          return <CardProject
            key={projectCard.title}
            title={projectCard.title}
            description={projectCard.description}
            image={projectCard.image}
          />
        })}
      </div>
        
      </div>
    </Layout>
  );
}

export default Index;
