import PricingFAQ from "../components/pricing/FAQ";
import PricingHero from "../components/pricing/Hero";
import PricingTable from "../components/pricing/PricingTable";

export default function PricingPage() {
    return(
        <>
            <PricingHero />
            <PricingTable />
            <PricingFAQ />
        </>
    )
}