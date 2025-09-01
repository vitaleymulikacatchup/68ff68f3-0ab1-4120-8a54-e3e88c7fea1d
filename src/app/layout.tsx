import type { Metadata } from "next";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

// Import the locked navbar component
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export const metadata: Metadata = {
  title: "MemeCoin",
  description: "Launch a playful, single-page MEME coin site with clear sections to inform and convert visitors to join the community."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
          <NavbarLayoutFloatingOverlay navItems={[{ name: '#hero', id: 'hero' }, { name: '#about', id: 'about' }, { name: '#how-to-buy', id: 'how-to-buy' }, { name: '#tokenomics', id: 'tokenomics' }, { name: '#faq', id: 'faq' }, { name: '#footer', id: 'footer' }]} logoSrc="/images/logo.svg" logoWidth={100} logoHeight={40} buttonText="Get MEME" onButtonClick={() => alert('Clicked!')} />
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}
