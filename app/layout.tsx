import '@/styles/globals.css';
import type { Metadata } from "next";
import Nav from '@/components/Nav';
import Provider from '@/components/Provider'

export const metadata: Metadata = {
  title: "....",
  description: "Discover & Share",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}
          </main>
          </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
