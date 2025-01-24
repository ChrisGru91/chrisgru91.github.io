import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Block from "../components/block"
import Secondblock from "../components/secondblock"
import About from "../components/about"
import Contact from "../components/contact"
import Seo from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const Cara = () => {
  const breakpoints = useBreakpoint();
  return (
    <>
    <Layout>
      <Parallax pages={9}>
        <Hero offset={0} factor={1} />
        {breakpoints.sm ? <Projects offset={1} factor={2} /> :  <Projects offset={1.25} factor={2} />}
        {breakpoints.sm ? <About offset={2.99} factor={2} /> : <About offset={3.25} factor={1.75} />}
        {breakpoints.sm ? <Block offset={4.2} factor={2.8} /> : <Block offset={4.1} factor={2.1} />}
        {breakpoints.sm ? <Secondblock offset={-9999} factor={0} /> : <Secondblock offset={6} factor={2} />}
        {breakpoints.sm ? <Contact offset={6} factor={3.4} /> : <Contact offset={7.5} factor={1.75} />}
      </Parallax>
    </Layout>
  </>
  );
}

export default Cara

export const Head: HeadFC = () => <Seo />