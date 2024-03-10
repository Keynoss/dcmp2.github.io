import { useLocation } from "react-router"
import NavBar from "./NavBar"
import HomeHero from "./home_components/HomeHero"
import HomeSection from "./home_components/HomeSection"
import HomeOverview from "./home_components/HomeOverview"
import HomeServices from "./home_components/HomeServices"
import HomeClients from "./home_components/HomeClients"
import Footer from "./Footer"
import AboutHero from "./about_components/AboutHero"
import AboutMandV from "./about_components/AboutMandV"
import ServicesHero from "./services_components/ServicesHero"
import ServicesSection from "./services_components/ServicesSection"
import ProjectsHero from "./projects_components/ProjectsHero"
import ContactHero from "./contact_components/ContactHero"


export function Home() {
    return (
        <div>
            <NavBar />
            <HomeHero />
            <HomeOverview />
            <HomeSection />
            <HomeServices />
            <HomeClients />
            <Footer />
        </div>
      
        
    )
}

export function About() {
    return (
        <div>
            <NavBar />
            <AboutHero />
            <AboutMandV />
            <Footer />
        </div>
        
    )
}

export function Services() {
    return (
        <div>
            <NavBar />
            <ServicesHero />
            <ServicesSection />
            <Footer />

        </div>
    )
}

export function Projects() {
    return (
        <div>
            <NavBar />
            <ProjectsHero />
            <Footer />
        </div>
       
    )
}

export function Contact() {
    return (
        <div>
            <NavBar />
            <ContactHero />
            <Footer />
        </div>
   
    )
}


export function Error404() {
    let location = useLocation();

    return (
        <div>
            <h1>Error 404: The URL {location.pathname} does not exist</h1>
        </div>
    )
}