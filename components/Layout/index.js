import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {

  return (
    <>
    <Head>
    <title>Sebastian Contreras</title>
    <link rel="icon" href="https://res.cloudinary.com/dv6wtaeqq/image/upload/v1595298547/sicp_fowpwt.png"/>
    </Head>
      <section className="hero is-dark is-fullheight">
        <Header />
        <div className="hero-body hero--pattern ">
          <div className="container">
            {children}
          </div>
        </div>
        <Footer />  
      </section>
      
    </>
  );
};

export default Layout;
