import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>
    <p>Welcome to my website!.</p>
    <p>Checkout my github!</p>
    <h2>Look! It's me!</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">Check out my projects!</Link><br />
    <Link to="/contact/">Contact Me</Link> 
    
  </Layout>
)

export default IndexPage
