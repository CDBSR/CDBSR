import React from 'react'
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <h2 className='section-title'>Where I've Worked</h2>
      <div className='experience-item'>
        <h3 className='experience-position'>Trinamix Inc</h3>
        <p className='experience-position'>Systems Engineer</p>
        <p className='experience-data'>Sep 2023 - Present</p>
        <p className='experience-description'>
          <ul style={{paddingLeft: '20px'}}>
            <li>Experienced  <b>Systems Engineer</b> specializing in <b>Oracle Integration Cloud (OIC)</b> and <b>Business Intelligence (BI) reports</b> with expertise in integration cloud and on-premise applications</li>
            <li>
              Skilled in developing and managing <b>OIC Integrations</b>, including REST/SOAP API's, adapters, orchestrations, and process automation to steamline business operations
            </li>
            <li>Proficient in designing and optimizing <b>BI reports and dashboards</b> for data-driven decision-making and enhanced business insights</li>
            <li>Hands-on experience working with <b>various Oracle Cloud modules</b>, including <b>ERP, HCM, SCM</b>, ensuring seamless data flow and system connectivity</li>
            <li>Strong knowledge of <b>data extraction, transformation, and loading (ETL) </b> processes to enhance reporting accuracy and performance </li>
            <li>Expertise in troubleshooting <b>integration errors, performance tuning,</b> and ensuring high availability of cloud-based solutions</li>
            <li>Collaborative team player with the ability to <b>work cross-functionally with stakeholders, business users, and technical teams</b> to deliver scalable solutions </li>
          </ul>
        </p>
      </div>

      <div className='experience-item'>
        <h3 className='experience-position'>Pizone Infotech Solutions</h3>
        <p className='experience-position'>Software Developer</p>
        <p className='experience-data'>Jan 2023 - Aug 2023</p>
        <p className='experience-description'>
          <ul style={{paddingLeft: '20px'}}>
            <li>Skilled  <b>Software Developer</b> with experience in <b>C#, .NET Framework</b> and <b>Microsoft SQL Server</b>, specializing in developing, optimizing, and maintaining robust applications</li>
            <li>
            Proficient in <b>designing, developing, and implementing new features</b> in .NET-based applications to enhance functionality and user experience
            </li>
            <li>Strong expertise in <b>writing and optimizing SQL queries, stored procedures, and database management</b> to ensure efficient data retrieval and storage</li>
            <li>Hands-on experience working in <b>debugging, troubleshooting, and fixing software bugs</b> to improve application performance and reliability</li>
            <li>Knowledge of <b> object-oriented programming (OOP), software development best practices, and agile methodologies</b> for efficient project execution </li>
            <li>Adept at <b>collaborating with cross-functional teams </b>, gathering requirements, and delivering high-quality solutions that align with business objectives</li>
            <li>Passionate about <b>problem-solving, code optimization, and continuous learning</b> to stay updated with the latest technologies and industry trends </li>
          </ul>
        </p>
      </div>

    </section>
  )
}

export default Experience
