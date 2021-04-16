import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { BannerStyles } from "../../styles/bannerStyles"
import styled from "styled-components"

const Banner = () => {


  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

const Ul = styled.ul`
  list-style:none;
  display:flex;
  justify-content:flex-start;
  flex-wrap: wrap;
`
const Li = styled.li`
  text-align: left;
  margin-bottom:20px;
`

const H2 = styled.h2`
  font-size:32px;
`

const Div = styled.div`
  margin-bottom:50px;
`
const DivOne = styled.div`
`

  return (
    <BannerStyles>
        <DivOne className="hero-content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
          >
             <span>Projects</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
          >
            <Div>
              <H2>Numerai Insights</H2>
              <Ul>
                <Li>Created a user dashboard for the Numer.ai data science competition</Li>
                <Li>Application is featured in Numer.ai documentation</Li>
                <Li>Allows users to view statistics and performance of models and model collections</Li>
                <Li>Built primarily with Node.js, Express, and ejs with API call to GraphQl database</Li>
              </Ul>
              <Button
            smooth={true} duration={500}
              cta="Webpage"
              label="Banner Learn More"
              anchor={true}
              href="http://www.numerai-insights.com"
            />
            </Div>
          </motion.p>
        </DivOne>
    </BannerStyles>
  )
}

export default Banner