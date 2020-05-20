import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Table } from "reactstrap"
import pageStyles from "./pages.module.css"
import JumboButton from "../components/jumboButton"

const NewslettersPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.about.newsletter_jumbotron.heading}
        subheading={content.ui.about.newsletter_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.about.newsletter_jumbotron.button.link}
          btnText={content.ui.about.newsletter_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Newsletters" />
    <Container>
      <Row className={pageStyles.pageContentContainer}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>
                {
                  content.ui.about.newsletter_main_content.table.headers
                    .newsletter
                }
              </th>
              <th>
                {content.ui.about.newsletter_main_content.table.headers.people}
              </th>
              <th>
                {
                  content.ui.about.newsletter_main_content.table.headers
                    .open_rate
                }
              </th>
              <th>
                {
                  content.ui.about.newsletter_main_content.table.headers
                    .click_rate
                }
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .feb20data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.feb20
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.feb20data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.feb20data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.feb20data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .jan20data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.jan20
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.jan20data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.jan20data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.jan20data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .dec19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.dec19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.dec19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.dec19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.dec19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .nov19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.nov19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.nov19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.nov19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.nov19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .oct19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.oct19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.oct19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.oct19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.oct19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .sep19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.sep19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.sep19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.sep19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.sep19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .aug19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.aug19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.aug19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.aug19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.aug19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .july19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.july19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.july19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.july19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.july19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .june19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.june19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.june19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.june19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.june19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .may19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.may19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.may19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.may19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.may19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .apr19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.apr19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.apr19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.apr19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.apr19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .mar19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.mar19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.mar19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.mar19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.mar19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .feb19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.feb19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.feb19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.feb19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.feb19data
                    .click_rate
                }
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <a
                  href={
                    content.ui.about.newsletter_main_content.table.rows
                      .jan19data.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {
                    content.ui.about.newsletter_main_content.table.rows.jan19
                  }{" "}
                </a>
              </th>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.jan19data
                    .people
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.jan19data
                    .open_rate
                }
              </td>
              <td>
                {
                  content.ui.about.newsletter_main_content.table.rows.jan19data
                    .click_rate
                }
              </td>
            </tr>
          </tbody>
        </Table>
        <Link to="/">Go Home</Link>
      </Row>
    </Container>
  </Layout>
)

export default NewslettersPage
