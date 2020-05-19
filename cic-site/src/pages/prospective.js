import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Container, Row, Col } from "reactstrap"
import content from "../content/content.json"
import pageStyles from "./pages.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faPencilRuler,
  faUserCheck,
  faMountain,
  faToolbox,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons"
// import { farListAlt } from "@fortawesome/free-regular-svg-icons"

const ProspectivePage = () => (
  <Layout>
    <SEO title="Prospective" />
    <Container fluid className={pageStyles.marginBottom}>
      <Row xs="2" className={pageStyles.centerText}>
        <Col>
          <h1>{content.ui.students_main_content.students_stats.stats_days}</h1>
          <h3>
            {content.ui.students_main_content.students_stats.stats_days_text}
            <sup>
              {content.ui.students_main_content.students_stats.footnote_1_super}
            </sup>
          </h3>
        </Col>
        <Col>
          <h1>
            {content.ui.students_main_content.students_stats.stats_salary}
          </h1>
          <h3>
            {content.ui.students_main_content.students_stats.stats_salary_text}
            <sup>
              {content.ui.students_main_content.students_stats.footnote_2_super}
            </sup>
          </h3>
        </Col>
      </Row>
      <Row xs="2" className={pageStyles.centerText}>
        <Col>
          <h1>{content.ui.students_main_content.students_stats.stats_jobs}</h1>
          <h3>
            {content.ui.students_main_content.students_stats.stats_jobs_text}
            <sup>
              {content.ui.students_main_content.students_stats.footnote_2_super}
            </sup>
          </h3>
        </Col>
        <Col>
          <h1>
            {content.ui.students_main_content.students_stats.stats_increase}
          </h1>
          <h3>
            {
              content.ui.students_main_content.students_stats
                .stats_increase_text
            }
            <sup>
              {content.ui.students_main_content.students_stats.footnote_2_super}
            </sup>
          </h3>
        </Col>
      </Row>
    </Container>
    <Container fluid className={pageStyles.marginBottom}>
      <Row className={pageStyles.centerText}>
        <Col>
          <sup>
            {content.ui.students_main_content.students_stats.footnote_1_super}
          </sup>
          <a
            href={
              content.ui.students_main_content.students_stats.footnote_1_link
            }
          >
            {content.ui.students_main_content.students_stats.footnote_1_name}
          </a>
        </Col>
      </Row>
      <Row className={pageStyles.centerText}>
        <Col>
          <sup>
            {content.ui.students_main_content.students_stats.footnote_2_super}
          </sup>
          <a
            href={
              content.ui.students_main_content.students_stats.footnote_2_link
            }
          >
            {content.ui.students_main_content.students_stats.footnote_2_name}
          </a>
        </Col>
      </Row>
    </Container>
    <Container fluid className={pageStyles.marginBottom}>
      <Row>
        <Col className={pageStyles.centerText}>
          <h3>{content.ui.students_main_content.students_congrats}</h3>
        </Col>
      </Row>
      <Row>
        <Col className={pageStyles.centerItems}>
          <iframe
            title="Congrats"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3N0K2ZgpB0s"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
    <Container fluid className={pageStyles.marginBottom}>
      <Row className={pageStyles.marginBottom}>
        <Col className={pageStyles.centerContentColumns}>
          <FontAwesomeIcon icon={faGraduationCap} size="3x" />
          <h3>
            {
              content.ui.students_main_content.student_resource_links
                .cohort1_text
            }
          </h3>
          <Button color="info">
            <a
              href={
                content.ui.students_main_content.student_resource_links
                  .cohort1_button_link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.students_main_content.student_resource_links
                  .cohort1_button_text
              }
            </a>
          </Button>
        </Col>
        <Col className={pageStyles.centerContentColumns}>
          <FontAwesomeIcon icon={faUserCheck} size="3x" />
          <h3>
            {" "}
            {
              content.ui.students_main_content.student_resource_links
                .admissions_text
            }
          </h3>
          <Button color="info">
            <a
              href={
                content.ui.students_main_content.student_resource_links
                  .admissions_button_link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.students_main_content.student_resource_links
                  .admissions_button_text
              }
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ProspectivePage
