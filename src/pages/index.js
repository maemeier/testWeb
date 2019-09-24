import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import Cell from "../components/cell"
import styled from "styled-components"
import staticdata from "../../staticdata.json"

const SectionCaption = styled.p`
  font-size: 18px;
  text-transfrom: uppercase;
  text-align: center;
  color: #94a4ba;


  }
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-columns: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br />
          design and code React app
        </h1>
        <p>
          Complete courses about the best tools and design system. Prototype and
          build apps with React and Swift{" "}
        </p>
        <a>Watch the video</a>
        <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-xcode.png")} width="50" />
          <img src={require("../images/logo-studio.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
        </div>

        <Wave />
      </div>
      <div ClassName="Card">
        <h2>11 Courses, more coming</h2>
      </div>
      <div className="CardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Developer"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </div>

      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries
				to get your site/product online. Get familiar with components, Grid CSS, animations,
				interactions, dynamic data with Contentful and deploying your site with Netlify"
      />

      <SectionCaption> 12 Section - 40 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cell.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage
