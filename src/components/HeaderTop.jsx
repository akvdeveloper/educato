import React from "react";
import { Link } from "react-router-dom"; 

const HeaderTop = () => {
  return (
    <div className="header-top second-header d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 d-none d-lg-block">
            <div className="header-social">
              <span>
                Follow us:-
                <Link to="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" title="LinkedIn">
                  <i className="fab fa-instagram" />
                </Link>
                <Link to="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#" title="YouTube">
                  <i className="fab fa-youtube" />
                </Link>
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 d-none d-lg-block text-right">
            <div className="header-cta">
              <ul>
                <li>
                  <div className="call-box">
                    <div className="icon">
                      <img src="assets/img/icon/phone-call.png" alt="Phone" />
                    </div>
                    <div className="text">
                      <span>Call Now !</span>
                      <strong>
                        <Link to="tel:+917052101786">+91 7052 101 786</Link>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="call-box">
                    <div className="icon">
                      <img src="assets/img/icon/mailing.png" alt="Mail" />
                    </div>
                    <div className="text">
                      <span>Email Now</span>
                      <strong>
                        <Link to="mailto:info@example.com">info@example.com</Link>
                      </strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
