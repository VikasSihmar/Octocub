import React from "react";
import "../Style/Methodology.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/MenuBookOutlined";
import LayersIcon from "@material-ui/icons/Layers";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";

const Methodology = () => {
  return (
    <div className="main-methodology">
      <div className="methodology-container">
        <h2>Our Methodology</h2>
        <span>-----------</span>
        <p>
          Adopting and implementing the latest, updated technology is what our
          team members of expert developers believe in, so do we want to offer
          our clients. We follow a rigorous process of planning, developing, and
          executing projects with one-on-one conversations for meeting our
          client expectations.
        </p>
        <div className="methodology">
          <div class="methodology-card">
            <SettingsIcon />
            <h4>
              <Link to="methodology-details.html">Working Methodology</Link>
            </h4>
            <p>
              We start with understanding our client's requirements by listening
              and go into the dimension of their imagination to get what our
              clients want with our web development services.
            </p>
          </div>
          <div class="methodology-card">
            {/* <LayersIcon /> */}
            <FontAwesomeIcon icon={faWarehouse} />

            <h4>
              <Link to="methodology-details.html">
                Planning And Execution Of A Project
              </Link>
            </h4>
            <p>
              When our clients and team are on the same page, we start our
              planning and execution phase of the project, keeping in touch with
              the clients until the project gets ready.
            </p>
          </div>
          <div class="methodology-card">
            <SettingsIcon />
            <h4>
              <Link to="methodology-details.html">Client Satisfaction</Link>
            </h4>
            <p>
              Happy and delighted customers are our only mission and vision at
              last, so our client satisfaction comes as a top priority once we
              developed the product. Our team works hard to deliver exact web
              solutions, whether it is an ecommerce website or mobile app, for
              utmost client satisfaction.
            </p>
          </div>
          <div class="methodology-card">
            <LayersIcon />
            <h4>
              <Link to="methodology-details.html">
                Gathering of Requirements
              </Link>
            </h4>
            <p>
              After understanding the specific needs of our clients with web
              solutions, our team of developers gathers up all the tools and
              technology to make our client's imagination into reality.
            </p>
          </div>
          <div class="methodology-card">
            <PeopleIcon />
            <h4>
              <Link to="methodology-details.html">Discussion Phase</Link>
            </h4>
            <p>
              Now again, when we have collected all technology and tools that
              will be required to accomplish the project, we contact our clients
              to make every service transparent and bring them on the same page.
            </p>
          </div>
          <div class="methodology-card">
            <PersonIcon />
            <h4>
              <Link to="methodology-details.html">Client Satisfaction</Link>
            </h4>
            <p>
              Happy and delighted customers are our only mission and vision at
              last, so our client satisfaction comes as a top priority once we
              developed the product. Our team works hard to deliver exact web
              solutions, whether it is an ecommerce website or mobile app, for
              utmost client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
