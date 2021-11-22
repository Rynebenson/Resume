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
                  Engineered highly interactive proposal editor allowing contractors to create estimates, 
                  generate invoices and distribute these documents to their clients via email.
                  </p>
                </li>
                <li>
                  <p>
                    Wrote unit tests for React.js and Node.js applications using popular libraries 
                    such as Jest, Enzyme, Mocha, and Supertest.
                  </p>
                </li>
                <li>
                  <p>
                  Automated building, testing, and deployment for web application and API code by deploying a CI/CD pipeline 
                  that utilized AWS services such as ECR, ECS, CodeBuild, CodePipeline, and CodeDeploy.
                  </p>
                </li>
                <li>
                  <p>
                    Coordinated with product managers to discuss features and organize tasks, on Jira, into biweekly sprints 
                    to meet deadlines and increase communication and performance.
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
                    Designed and developed an in-house content management system for creating, updating, and deleting inventory, 
                    tracking orders, and automating customer communication.
                  </p>
                </li>
                <li>
                  <p>
                    Integrated Stripe API for payment processing and delivering sales analytics through a dashboard interface.
                  </p>
                </li>
              </ul>
            </div>

            <div className="group">
              <p className="position"><span className="emphasis">Web Developer at Fig</span> San Diego, Ca. January 2017 - December 2018</p>
              <ul>
                <li>
                  <p>
                    Developed front-end and back-end services for the social networking
                    web application using PHP, Javascript, jQuery, and MySQL.
                  </p>
                </li>
                <li>
                  <p>
                    Coordinated with a team of designers to create and implement reusable modern UI/UX elements and
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
                HTML, CSS/SASS, CSS-in-JS
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
                GraphQL, jQuery
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
                Rory Abraham
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
