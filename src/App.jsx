import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Clients from "./components/Clients.jsx";
import EnquiryForm from "./components/EnquieryForm.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import BackToTop from "./components/BackToTop.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Clients />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}