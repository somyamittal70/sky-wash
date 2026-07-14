import GalleryCTA from "../components/gallery/CTA";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryHero from "../components/gallery/Hero";

export default function GalleryPage() {
    return(
        <>
            <GalleryHero />
            <GalleryGrid />
            <GalleryCTA />
        </>
    )
}