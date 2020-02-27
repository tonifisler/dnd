import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <p>
      Custom DND helpers from{" "}
      <a href="https://twitter.com/tonifisler">@tonifisler</a>
    </p>
    <ul>
      <li>
        <Link to="/player-cheat-sheet/">Player Cheat Sheet</Link>
      </li>
      <li>
        <Link to="/simpler-cheat-sheet">Simpler Cheat Sheet</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
