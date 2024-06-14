import React from 'react';
import './Faq.css'; 
import Header from './Header';
import Footer from '../global/Footer';

const Faq = () => {
  return (
    <>
    <Header/>
    <div className="faq-container">
      <div className="faq-header">
        Frequently Asked Questions
      </div>
      <div className="faq-content">
        <h2>General Disclaimer</h2>
        <p>
          No third party agency is working on behalf of SEVA Srijan Foundation for any recruitment, training, camps or other activities related to SEVA Srijan Foundation. 
          Please check/consult with SEVA Srijan Foundation directly to get correct information or assistance. 
          Please beware of any unwarranted claims made by anyone on our behalf. Kindly bring any such claims to our notice for immediate attention and action. 
          SEVA Srijan Foundation doesn’t charge any money from anyone for these activities. 
          So if you come across any individual/organization making a monetary demand in our name please bring it to our notice immediately on 
          <a href="mailto:sevasrijanfoundation@gmail.com"> sevasrijanfoundation@gmail.com</a> or call us on 9717927771 / 8527298877.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is SEVA Srijan Foundation (SSF)?</h3>
        <p>
          SEVA Srijan Foundation (SSF) is a Non-Profit Organization (NPO) established in 2020 by Mrs. Bharti and Mr. Siddhartha Pareek. It focuses on the upliftment of under-privileged children and their families through education, holistic healthcare, and skill development.
        </p>
      </div>
      <div className="faq-item">
        <h3>Who are the founder directors of SSF?</h3>
        <p>
          The founders of SSF are Mrs. Bharti Pareek and Mr. Siddhartha Pareek. Mr. Pareek, with a three-decade career as a cop, has conceptualized several social projects, while Mrs. Pareek, an educationist for nearly three decades, plays a crucial role in the organization's programs.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is the vision of SSF?</h3>
        <p>
          The vision of SSF is to create a society based on legitimate rights, equity, social sensitivity, and justice, built on the foundation of Good Citizens.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is the mission of SSF?</h3>
        <p>
          SSF's mission is "To identify and channelize the energies of economically & socially marginalized youth towards self-reliance & helping them through awareness, education & skilling" using the pedagogy "Educate-Train-Employ."
        </p>
      </div>
      <div className="faq-item">
        <h3>What are some of the notable projects initiated by SSF?</h3>
        <p>
          Notable projects include "YuvaConnect," a joint initiative with Delhi Police, Prayas JAC Society, and DCPCR, and the Mewat Rural Education Programme, aimed at improving educational infrastructure in government schools in Mewat.
        </p>
      </div>
      <div className="faq-item">
        <h3>What are various programme that SEVA Srijan Foundation is involved with?</h3>
        <p>
          With its primary focus on channelizing resources from the cities to the villages, SEVA Srijan Foundation works on the following programs:
          <ul>
            <li>Good Citizenship Programme</li>
            <li>Aftercare Programme</li>
            <li>Skill Development</li>
            <li>Talent Bank Development</li>
          </ul>
        </p>
      </div>
      <div className="faq-header">
        Contributing Material to SEVA Srijan Foundation
      </div>
      <div className="faq-item">
        <h3>How can I contribute material to SEVA Srijan Foundation?</h3>
        <p>
          You can contribute materials by contacting SSF directly through their website or reaching out to their support team via email or phone. Specific details on accepted materials and drop-off locations will be provided.
        </p>
      </div>
      <div className="faq-item">
        <h3>What types of materials are most needed by SSF?</h3>
        <p>
          SSF typically requires educational supplies, healthcare materials, and items that support skill development programs.
        </p>
      </div>
      <div className="faq-item">
        <h3>Can I donate used items to SSF?</h3>
        <p>
          Yes, used items in good condition, especially educational materials, clothing, and skill development tools, are often accepted. Please ensure they are in good working order and hygienic condition before donating.
        </p>
      </div>
      <div className="faq-item">
        <h3>Is there a specific procedure to follow for donating materials to SSF?</h3>
        <p>
          Yes, donors are usually required to fill out a donation form available on the SSF website or at their office. This form helps track donations and ensures they are used effectively.
        </p>
      </div>
      <div className="faq-item">
        <h3>Will I receive a receipt for my material donation to SSF?</h3>
        <p>
          Yes, SSF provides receipts for material donations. These receipts can be useful for your records and for tax deduction purposes, depending on local regulations.
        </p>
      </div>
      <div className="faq-header">
        Scheduling A Visit To SEVA Srijan Foundation
      </div>
      <div className="faq-item">
        <h3>I want to see your processing center in Delhi. Who should I coordinate with, for this?</h3>
        <p>
          Please Contact SEVA Srijan Foundation to schedule your visit during our working hours i.e Monday – Saturday (10 am – 5 pm, lunch hours 1.30 pm – 2.30 pm).
          In Delhi, our address is – SEVA Srijan Foundation Plot # 76, Bhagrati Niwas, Main Mandi Road, Village-Jaunapur, New Delhi-110047.
          Please call on  9717927771 / 8527298877 for any assistance regarding directions etc.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Faq;
