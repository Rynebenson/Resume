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
                HTML/CSS
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
                React.js, React Native, Next.js, Node.js, Express.js,
                GraphQL, Serverless, Tailwind CSS
              </p>
            </div>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Tools &amp; Services
                </span>
              </p>
              <p className="skills">
                Git, Docker, AWS, Azure DevOps, Visual Studio Code,
                Jira, Postman
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
        </div>

        <div className="col1">
          <section className="section">
            <h3 className="section-title">Experience</h3>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Founding Engineer at WeApply
                </span>

                Los Angeles, Ca. January 2023 - Present &bull; Contract
              </p>

              <ul>
                <li>
                  <p>
                    Architected and developed front-end application using Next.js, React.js and Tailwind CSS.
                  </p>
                </li>
                <li>
                  <p>
                    Designed and developed internal employee system using Next.js and React.js, enabling efficient
                    management and access to secure customer data.
                  </p>
                </li>
                <li>
                  <p>
                    Developed scalable REST API using Serverless architecture and Node.JS Lambda functions.
                  </p>
                </li>
                <li>
                  <p>
                    Designed database schema, implemented database models, and
                    optimized queries using MongoDB for data storage and retrieval.
                  </p>
                </li>
                <li>
                  <p>
                    Automated a range of services from email marketing campaigns to real-time data processing
                    using AWS Lambda cron jobs.
                  </p>
                </li>
              </ul>
            </div>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Senior Full Stack Engineer at Arch Painting
                </span>

                Remote. September 2023 - April 2024. &bull; Contract
              </p>

              <ul>
                <li>
                  <p>
                    Developed front-end web applications using TypeScript, React.js, Next.js and Radix UI
                  </p>
                </li>
                <li>
                  <p>
                    Implemented end-to-end tests using Cypress for React.js application to achieve comprehensive test coverage.
                  </p>
                </li>
                <li>
                  <p>
                    Refactored legacy codebases by utilizing modern frameworks to improve performance, code quality,
                    and scalability.
                  </p>
                </li>
                <li>
                  <p>
                    Collaborate with product manager to refine features and create tasks using Jira.
                  </p>
                </li>
              </ul>
            </div>

            <div className="group">
              <p className="position">
                <span className="emphasis">
                  Senior Developer II at Nexient
                </span>

                Remote. June 2022 - June 2023. &bull; Full Time
              </p>

              <ul>
                <li>
                  <p>
                    Led the front-end development team using React.js, Next.js and Material UI to create web applications for client, Verra Mobility.
                  </p>
                </li>
                <li>
                  <p>
                    Conducted weekly code reviews to improve code quality and ensure code was well maintained and coding standards were upheld.
                  </p>
                </li>
                <li>
                  <p>
                    Developed API endpoints using Node.js Lambda functions within a serverless architecture for client, Trinity Rails.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented AWS Cognito to provide secure and scalable authentication services for web applications.
                  </p>
                </li>
              </ul>
            </div>

            <div className="group">
              <p className="position"><span className="emphasis">Full Stack Engineer at Frank</span> Los Angeles, Ca. July 2020 - May 2022 &bull; Contract</p>
              <ul>
                <li>
                  <p>
                    Architected and developed web applications using Next.js, React.js, Redux, and Tailwind CSS.
                  </p>
                </li>
                <li>
                  <p>
                    Developed scalable REST API using Node.js, AWS Lambda functions, and API Gateway resulting in
                    improved system resposniveness and reduced infrastructure costs.
                  </p>
                </li>
                <li>
                  <p>
                    Designed and implemented database system using MongoDB, optimizing data storage
                    and retrieval processes for enhanced performance and scalability. 
                  </p>
                </li>
                <li>
                  <p>
                    Automated CI/CD pipeline to build, test and deploy code
                    utilizing Git, Docker and AWS Services.
                  </p>
                </li>
                <li>
                  <p>
                    Coordinated with product managers to define scope of work, refine features, and prioritize tasks using Jira.
                  </p>
                </li>
              </ul>
            </div>

            <div className="group" style={{marginTop: 0}}>
              <p className="position"><span className="emphasis">Full Stack Engineer at Original Eye</span> Los Angeles, CA. April 2018 - January 2020 &bull; Contract </p>
              <ul>
                <li>
                  <p>
                    Developed web applications for the e-commerce platform 
                    using React.js, GraphQL, and Stripe.
                  </p>
                </li>
                <li>
                  <p>
                    Designed and developed content management system using Next.js and React.js for managing inventory, 
                    tracking orders, and email marketing.
                  </p>
                </li>
                <li>
                  <p>
                    Developed REST API using NodeJS with Express framework.
                  </p>
                </li>
                <li>
                  <p>
                    Wrote unit tests for React.js and Node.js applications using Jest, Enzyme, Mocha, and Supertest.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section className="section">
            <h3 className="section-title">References</h3>
            <p className="position">
              <span className="emphasis">Rory Abraham</span>
              Full Stack Engineer at Expensify
            </p>
            <p className="skills">
              408-529-4667
            </p>
            <div style={{ margin: 4 }} />
            <p className="position">
              <span className="emphasis">Joseph Thompson</span>
              Dev Ops Engineer at Nexient
            </p>
            <p className="skills">916-532-5212</p>
          </section>
      </div>
    </div>
  )
}
