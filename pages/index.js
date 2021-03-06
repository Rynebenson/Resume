import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <h2 className="title">Ryne Benson</h2>

      <div className="navigation">
        <div>
          <span>Phone: </span>
          <span>623-249-8037</span>
        </div>
        <div>
          <span>Email: </span>
          <a href="mailto:rynebensont@gmail.com">
            rynebensont@gmail.com
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/rynebenson">
            linkedin.com/in/rynebenson
          </a>
        </div>
        <div>
          <a href="https://github.com/rynebenson">
            github.com/rynebenson
          </a>
        </div>
        <div>
          
        </div>
      </div>

      <div className="flex">
        <div className="col1">
          <section className="section">
            <h3 className="section-title">Experience</h3>

            <div className="group">
              <p className="position"><span className="emphasis">Full Stack Engineer at Frank</span> Los Angeles, Ca. July 2020 - Present</p>
              <ul>
                <li>
                  <p>
                    Architected and developed feature rich customer relationship management system, 
                    consisting of 40 database tables and 250 endpoints, allowing general
                    contractors to build and distribute proposals efficiently.
                  </p>
                </li>
                <li>
                  <p>
                    Automated build, test, and deployment processes for Web Application and REST API code via CI/CD pipeline 
                    utilizing Webpack, Docker and AWS Services.
                  </p>
                </li>
                <li>
                  <p>
                    Coordinated with product managers to refine features and prioritize tasks by creating biweekly sprints through Jira services, 
                    which encouraged flexibility and focused output.
                  </p>
                </li>
                <li>
                  <p>
                    Conducted biweekly code reviews with engineers to improve code quality and ensure application structures and conventions
                    were maintained.
                  </p>
                </li>
              </ul>
            </div>

            <div className="group">
              <p className="position"><span className="emphasis">Full Stack Engineer at Original Eye</span> Los Angeles, CA. January 2019 - January 2020</p>
              <ul>
                <li>
                  <p>
                    Developed and shipped modern web applications for the e-commerce platform 
                    using popular frameworks including React, GraphQL, and SASS.
                  </p>
                </li>
                <li>
                  <p>
                    Designed and developed in-house content management system for managing inventory, 
                    tracking orders, and automating customer communication.
                  </p>
                </li>
                <li>
                  <p>
                    Integrated Stripe API for payment processing and delivering sales analytics through a dashboard interface.
                  </p>
                </li>
                <li>
                  <p>
                    Wrote unit tests for React.js and Node.js applications using popular libraries 
                    such as Jest, Enzyme, Mocha, and Supertest.
                  </p>
                </li>
              </ul>
            </div>

            <div className="group">
              <p className="position"><span className="emphasis">Web Developer at Fig</span> San Diego, Ca. January 2017 - March 2018</p>
              <ul>
                <li>
                  <p>
                    Developed front-end and back-end services for the social networking
                    web application using PHP, Javascript, jQuery, and MySQL.
                  </p>
                </li>
                <li>
                  <p>
                    Coordinated with a team of designers to create modern and reusable UI/UX elements and
                    increase user engagement.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="col2">
          <section className="section">
            <h3 className="section-title">Skills</h3>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Programming Languages
                </span>
              </p>
              <p className="skills">
                JavaScript (ES6), TypeScript, Python,
                Java, C++, HTML, CSS/SASS
              </p>
            </div>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Database Technologies
                </span>
              </p>
              <p className="skills">
                MongoDB, Mongoose, PostgreSQL, MySQL
              </p>
            </div>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Libraries &amp; Frameworks
                </span>
              </p>
              <p className="skills">
                React.js, React Native, Next.js, Node.js, Express,
                GraphQL, jQuery, CSS-in-JS
              </p>
            </div>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Tools &amp; Services
                </span>
              </p>
              <p className="skills">
                Git, Docker, AWS, Firebase, Heroku,
                Postman, Jira, Visual Studio Code
              </p>
            </div>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Design
                </span>
              </p>
              <p className="skills">
                Figma, AdobeXD, Photoshop
              </p>
            </div>
          </section>

          <section className="section">
            <h3 className="section-title">Education</h3>
            <p className="position">
              <span className="emphasis">
                California Baptist University
              </span>
            </p>
            <p className="skills">
              Riverside, Ca. 2015 - 2017
            </p>
          </section>

          <section className="section">
            <h3 className="section-title">References</h3>
            <p className="position">
              <span className="emphasis">
                Rory Abraham - Full Stack Engineer at Expensify
              </span>
            </p>
            <p className="skills">
              408-529-4667
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
