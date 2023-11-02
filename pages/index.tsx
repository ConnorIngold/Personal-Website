import type { NextPage } from "next";
import Script from 'next/script'
import { useIsScreenSize } from "../hooks/useIsScreenSize";
import Image from "next/image";
import Layout from "../components/global/Layout";
import Clients from "../components/Clients";
import ClientsMobile from "../components/ClientsMobile";
import TitleIconBlocks from "../components/global/TitleIconBlocks/TitleIconBlocks";
import MyProjects from "../components/MyProjects";
import MyStart from "../components/MyStart";
import ContactSection from "../components/global/Contact/ContactSection";
import UnderConstruction from "../components/global/UnderConstruction";

import { services } from "./../public/data/services";

const Home: NextPage = () => {
  const isMobile = useIsScreenSize(768);

  return (
    <Layout>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8F35GEZP7K" />
				<Script id="google-analytics">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-8F35GEZP7K', {
						page_path: window.location.pathname,
					});
					`}
				</Script>

      <main className="container">
        <UnderConstruction />
        <section className="text-center my-7 lg:my-14">
          <h1 className="text-black mb-7 text-title">
            Welcome to my portfolio!
          </h1>
          <p>
            I&apos;m a remote web developer based in London and Northampton{" "}
            <br /> with over half a decade of experience.{" "}
          </p>
        </section>
        <section id="banner">
          <Image
            loading="eager"
            src="/images/Connor_BG.webp"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcVg8AAfEBN0joyNIAAAAASUVORK5CYII="
            className="rounded-2xl border border-[#1A1918] mx-auto"
            sizes="(min-width: 1440px) 80vw, (min-width: 768px) 50vw, 40vw"
            width={1280}
            height={720}
            placeholder="blur"
            priority
            alt="Banner"
          />
        </section>
        {isMobile ? <ClientsMobile /> : <Clients />}

        <TitleIconBlocks
          services={services}
          heading="What I Do"
          sectionClassName="my-7 lg:my-24"
        />
        <MyProjects />
        <MyStart />
        <ContactSection title="Let’s bring your business to the next level" />
      </main>
    </Layout>
  );
};

export default Home;
