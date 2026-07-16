import PricingHero from "../components/pricing/Hero";
import HomeLinensSection from "../components/pricing/Homeline";
import MensWearSection from "../components/pricing/Mens";
import ShoesAndBagsSection from "../components/pricing/Shoes";
import WomensWearSection from "../components/pricing/Womens";
export default function PricingPage() {
    return(
        <>
            <PricingHero />
            <MensWearSection />
            <WomensWearSection />
            <HomeLinensSection />
            <ShoesAndBagsSection />
        </>
    )
}