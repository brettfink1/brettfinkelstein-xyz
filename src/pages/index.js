import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>
    <h3>Welcome to my website!</h3>
    <p>The site is still under construction, please check back soon!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      
    </div>
    <Link to="/projects/">Check out my projects!</Link><br />
    <Link to="/contact/">Contact Me</Link><br />
    
  </Layout>
)

export default IndexPage
