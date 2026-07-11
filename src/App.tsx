import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import FAQ from "./components/layout/Faq";
import FinalCTA from "./components/layout/FinalCTA";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Portfolio from "./components/layout/Portfolio";
import Pricing from "./components/layout/Pricing";
import ProblemSolution from "./components/layout/ProblemSolution";
import Process from "./components/layout/Process";
import Services from "./components/layout/Services";
import Testimonials from "./components/layout/Testimonials";
import Trusted from "./components/layout/TrustedSection";
import WhyChooseMe from "./components/layout/WhyChooseMe";


function App(){

return(

<>
<Header/>

<main>
<section id="home">
<Hero />
<Trusted />
<ProblemSolution/>
<Services />
<About />
<Portfolio />
<WhyChooseMe />
<Pricing />
<Process />
<Testimonials />
<FAQ />
<FinalCTA />
<Contact />
<Footer />

</section>
</main>

</>

)

}


export default App;