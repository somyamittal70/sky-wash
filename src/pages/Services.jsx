import Hero from "../components/home/Hero";
import ServicesCTA from "../components/services/CTA";
import ServicesHero from "../components/services/Hero";
// import HowItWorks from "../components/services/HowItWorks";
// import Pricing from "../components/services/Pricing";
import ServicesGrid from "../components/services/ServicesGrid";

export default function ServicesPage() {
    return(
        <>
            <ServicesHero />
            <ServicesGrid />
            {/* <HowItWorks /> */}
            {/* <Pricing /> */}
            <ServicesCTA />
        </>
    )
}