import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Veronica Lee" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Veronica" />
        <InterestsSection sectionId="details" heading="Favorite Tools" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
