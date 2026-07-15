import PricingFAQ from "../components/pricing/FAQ";
import PricingHero from "../components/pricing/Hero";
import PricingTable from "../components/pricing/PricingTable";
import TrustGuaranteeStrip from "../components/pricing/Trust";

export default function PricingPage() {
    return(
        <>
            <PricingHero />
            <PricingTable />
            <TrustGuaranteeStrip />
            <PricingFAQ />
        </>
    )
}