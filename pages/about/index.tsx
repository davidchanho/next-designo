import Image from "next/image";
import React from "react";
import { AboutHeader } from "../../components/about/about-header";
import { AboutSection } from "../../components/about/about-section";
import Location from "../../shared/location-card";
import Template from "../../shared/template";

function About() {
  return (
    <Template>
      <AboutHeader>
        <Image
          src="/assets/about/mobile/image-about-hero.jpg"
          alt=""
          width={480}
          height={320}
        />
        <h3>About Us</h3>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </AboutHeader>
      <AboutSection>
        <Image
          src="/assets/about/mobile/image-world-class-talent.jpg"
          alt=""
          width={375}
          height={320}
        />
        <h3>World-class talent</h3>
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </AboutSection>

      <Location />
      <AboutSection>
        <Image
          src="/assets/about/mobile/image-real-deal.jpg"
          alt=""
          width={375}
          height={320}
        />
        <h3>The real deal</h3>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </AboutSection>
    </Template>
  );
}

export default About;
