import About from "../components/home/About"
import WhyChooseUs from "../components/home/ChooseUs"
import ContactUs from "../components/home/ContactUs"
import Hero from "../components/home/Hero"
import HowItWorks from "../components/home/HowItWork"

export default function HeroPage() {
    return (
        <>
            <Hero />
            <About />
            <HowItWorks />
            <WhyChooseUs />
            <ContactUs />
        </>
    )
}