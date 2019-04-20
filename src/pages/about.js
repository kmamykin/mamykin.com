import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>Hello</h1>
    <p><Link to={"/"}>My blog is here.</Link></p>
  </Layout>
)
