import FeatureProducts from "@/components/Home/FeatureProducts.jsx";
import HeroSection from "@/components/Home/HeroSection.jsx";
import RecentlyAddedProduct from '@/components/Home/RecentlyAddedProduct.jsx'
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div>
        <HeroSection />
        <RecentlyAddedProduct />
        <FeatureProducts />
      </div>
    </>
  );
}
