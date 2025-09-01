"use client";

import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <>
      <SplitHero title="Join the MemeCoin Revolution!" subtitle="Your playful journey into the world of Meme coins!" primaryButtonText="Get MEME" secondaryButtonText="Learn More" />
      <SocialsAbout title="About MemeCoin" descriptions={["MemeCoin is a community-driven cryptocurrency that brings fun to finance.", "Join our playful community and start investing today!"]} />
      <HowToBuy3D title="How to Buy MemeCoin" steps={[{ title: "Step 1: Set Up Your Wallet", description: "Download a cryptocurrency wallet to hold your MemeCoins.", image: '/images/placeholder1.avif', position: "left", isCenter: false }, { title: "Step 2: Buy Ethereum", description: "Purchase Ethereum as it's required to swap for MemeCoin.", image: '/images/placeholder2.avif', position: "center", isCenter: true }, { title: "Step 3: Swap for MemeCoin", description: "Use your Ethereum to buy MemeCoin on an exchange!", image: '/images/placeholder3.avif', position: "right", isCenter: false }]} />
      <NumberGridTokenomics title="Our Tokenomics" description="Discover how our token works and how it benefits you." kpiItems={[{ value: "1M", description: "Total Supply" }, { value: "50%", description: "Liquidity" }, { value: "1%", description: "Development Fund" }]} />
      <CentralFAQ items={[{ title: "What is MemeCoin?", content: "MemeCoin is a fun and community-focused cryptocurrency!" }, { title: "How can I buy MemeCoin?", content: "You can buy MemeCoin on various exchanges using Ethereum." }, { title: "Where can I learn more?", content: "Visit our website for more information on MemeCoin." }]} />
      <FooterLogo logoSrc="/images/logo.svg" logoAlt="MemeCoin Logo" logoText="MemeCoin" className="footer-class" svgClassName="svg-footer-class" />
    </>
  );
}
