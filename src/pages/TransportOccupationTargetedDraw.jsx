import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/TransportOccupationTargetedDraw.module.css";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const TransportOccupationTargetedDraw = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/transportOccuptionTargDrawMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/transport-occupation")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sectionsRef = useRef([]);

  const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add(styles.visible);
      } else {
        section.classList.remove(styles.visible);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const extractStrongText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    const strongMatch = htmlString.match(/<strong>(.*?)<\/strong>/);
    return strongMatch ? strongMatch[1] : "";
  };

  const extractRemainingText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    return htmlString.replace(/<strong>.*?<\/strong>/, "").trim();
  };

  const fetchedValue91 = pData?.wcu1;
  const strongText91 = extractStrongText(fetchedValue91);
  const remainingText91 = extractRemainingText(fetchedValue91);
  
  const fetchedValue92 = pData?.wcu2;
  const strongText92 = extractStrongText(fetchedValue92);
  const remainingText92 = extractRemainingText(fetchedValue92);
  
  const fetchedValue93 = pData?.wcu3;
  const strongText93 = extractStrongText(fetchedValue93);
  const remainingText93 = extractRemainingText(fetchedValue93);
  
  const fetchedValue94 = pData?.wcu4;
  const strongText94 = extractStrongText(fetchedValue94);
  const remainingText94 = extractRemainingText(fetchedValue94);

  return (
    <>
          <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                {" "}
                About the Program{" "}
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("transport-eligibility")}>
                Transport Eligibility
              </p>
              <p onClick={() => scrollToSection("transport_occupations")}>
                Transport Occupations
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment{" "}
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                {" "}
                Why Choose Us?{" "}
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials{" "}
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          {pData?.transportOccuptionTargDrawHeading}
        </h1>

        <div className={styles.introduction}>
          <p>
          {pData?.transportOccuptionTargDrawPara}
          </p>
        </div>

        <div
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?. EligibilityFirstHeading}
          </h2>
          <p>
          {pData?. EligFirstSubHead}
          </p>
          <ol>
            <li>
            {pData?.EligPara1 }
            </li>
            <li>
            {pData?.EligPara2 }
              <ul className={styles.subheadingLink}>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-worker-program")
                    }
                  >
                    Federal Skilled Worker Program (FSW)
                  </button>
                  {pData?.EligPara2Li1 }
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/canadian-experience-class")
                    }
                  >
                    Canadian Experience Class (CEC)
                  </button>
                  {pData?.EligPara2Li2 }
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-trades-program")
                    }
                  >
                    Federal Skilled Trades Program (FSTP)
                  </button>
                  {pData?.EligPara2Li3 }
                </li>
              </ul>
            </li>
          </ol>
          <p>
          {pData?.EligPara3 }
          </p>
        </div>

        <div
          className={`${styles.transportEligibility} ${styles.section}`}
          id="transport-eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
           {pData?.EligCritHeading }
          </h2>
          <p>
          {pData?.EligCritSubHead }
          </p>
          <ul>
            <li>
            {pData?.ec1 }
            </li>
            <li>{pData?.ec2}</li>
          </ul>
          {/* <p>
            Here is the list of eligible NOCs:{" "}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html"
              className={styles.link}
            >
              Eligible NOCs List
            </a>
          </p> */}
        </div>

        <div
          className={`${styles.tableContainer} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>{pData?.EligTransportOccuTableHeading }</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{pData?.etroT1h1 }</th>
                <th>{pData?.etroT2h2 }</th>
                <th>{pData?.etroT3h3 }</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.etroT1Li1}</td>
                <td>{pData?.etroT2Li1 }</td>
                <td>{pData?.etroT3Li1 }</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li2}</td>
                <td>{pData?.etroT2Li2}</td>
                <td>{pData?.etroT3Li2}</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li3 }</td>
                <td>{pData?.etroT2Li3 }</td>
                <td>{pData?.etroT3Li3}</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li4 }</td>
                <td>{pData?.etroT2Li4 }</td>
                <td>{pData?.etroT3Li4}</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li5 }</td>
                <td>{pData?.etroT2Li5 }</td>
                <td>{pData?.etroT3Li5 }</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li6}</td>
                <td>{pData?.etroT2Li6 }</td>
                <td>{pData?.etroT3Li6 }</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li7 }</td>
                <td>{pData?.etroT2Li7 }</td>
                <td>{pData?.etroT3Li17}</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li8 }</td>
                <td>{pData?.etroT2Li8 }</td>
                <td>{pData?.etroT3Li8 }</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li9 }</td>
                <td>{pData?.etroT2Li9 }</td>
                <td>{pData?.etroT3Li9 }</td>
              </tr>
              <tr>
                <td>{pData?.etroT1Li10 }</td>
                <td>{pData?.etroT2Li10 }</td>
                <td>{pData?.etroT3Li10 }</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className={`${styles.drawHistory} ${styles.section}`}
          id="transport_occupations"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.ExpressEntryHeading }
          </h2>
          <p>
          {pData?.ExpressEntryPara }
          </p>
          {/* <a href="" className={styles.button}></a> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </div>
      
        <div
          className={`${styles.contact} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotHeading }</h2>
          <p>
          {pData?.s1 }
          </p>
          <p>
          {pData?.s2 }
          </p>
          {/* <a href="/contact" className={styles.button}></a> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </button>
        </div>

        {/* <div
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p>
            Here is where you can describe why clients should choose your
            services over others. Highlight your unique selling points, such as
            personalized service, high success rates, and expert knowledge.
          </p>
          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "/booking")
            }
          >
            Book Appointment
          </button>
        </div> */}

       <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
        <h2>  {pData?.WhyChooseUsHeading01 }</h2>
          <ul  style={{marginLeft: "40px", listStyle: "disc"}}>
            <li>
              <strong>{strongText91}</strong>{" "} {remainingText91}
            </li>
            <li>
            <strong>{strongText92}</strong>{" "} {remainingText92}
            </li>
            <li>
            <strong>{strongText93}</strong>{" "} {remainingText93}
            </li>
            <li>
            <strong>{strongText94}</strong>{" "} {remainingText94}
            </li>
          </ul>

          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "/booking")
            }
          >
            Book Appointment
          </button>
        </section>

      </div>

      <div id="faqs">
      <FAQ_White_Internal data={pData} />
      </div>
      {pData?.show_testimonials == "Y" && (
        <div id="testimonials">
          <Testimonials />
        </div>
      )}
      <div id="blogs">
        <RecentBlogs />
      </div>

      <Footer1 />
    </>
  );
};

export default TransportOccupationTargetedDraw;