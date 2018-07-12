import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from './header'
import './layout.css'
import { css } from "glamor"

import interUIRegularWoff2 from "../assets/inter-ui-regular.woff2"
import interUIRegularWoff from "../assets/inter-ui-regular.woff"

import interUIItalicWoff2 from "../assets/inter-ui-italic.woff2"
import interUIItalicWoff from "../assets/inter-ui-italic.woff"

import interUIBoldWoff2 from "../assets/inter-ui-bold.woff2"
import interUIBoldWoff from "../assets/inter-ui-bold.woff"


css.insert(`
/* Inter UI */
@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("${interUIRegularWoff2}") format("woff2"),
    url("${interUIRegularWoff}") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("${interUIItalicWoff2}") format("woff2"),
    url("${interUIItalicWoff}") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("${interUIBoldWoff2}") format("woff2"),
    url("${interUIBoldWoff}") format("woff");
}
`)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            fontFamily: "Inter UI",
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
