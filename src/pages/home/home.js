import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeStyle } from "./home.style";
import nodejs from "../../assets/images/js.png";
import csharp from "../../assets/images/csharp.png";
import angular from "../../assets/images/angular.png";
import sass from "../../assets/images/sass.png";
import typescript from "../../assets/images/typescript.jpg";
import htmlcssjs from "../../assets/images/html_css_js.jpg";
import react from "../../assets/images/react.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconColor = "blueviolet";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: { p1: "", span1: "", p2: "", span2: "" }
    };
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    this.updateText("Hello, my name is ", "p1").then(() => {
      this.updateText("Adeniyi Yusuf", "span1").then(() => {
        this.updateText("I'm a ", "p2").then(() => {
          this.updateText("full-stack web developer", "span2");
        });
      });
    });
  }

  updateText(p1, prop) {
    let words = Object.assign({}, this.state.words);
    let i = 0;
    return new Promise((resolve, reject) => {
      let timeout = setInterval(() => {
        if (!p1[i]) {
          clearInterval(timeout);
          resolve("done");
        } else {
          words[prop] += p1[i];
          this.setState({ words });
          ++i;
        }
      }, 200);
    });
  }

  render() {
    return (
      <HomeStyle>
        <div className="row-1">
          <div className="pix" />

          <p className="text">
            {this.state.words.p1}
            <span className="text-extra">{this.state.words.span1}</span>
          </p>
          <p className="text">
            {this.state.words.p2}
            <span>{this.state.words.span2}</span>
          </p>

          <div className="social">
            <div className="facebook social-icon">
              <FontAwesomeIcon color={iconColor} icon={["fab", "facebook"]} size="2x" />
            </div>
            <div className="google social-icon">
              <FontAwesomeIcon color={iconColor} icon={["fab", "google"]} size="2x" />
            </div>
            <div className="twitter social-icon">
              <FontAwesomeIcon color={iconColor} icon={["fab", "twitter"]} size="2x" />
            </div>
            <div className="linkedin social-icon">
              <FontAwesomeIcon color={iconColor} icon={["fab", "linkedin"]} size="2x" />
            </div>
            <div className="instagram social-icon">
              <FontAwesomeIcon color={iconColor} icon={["fab", "instagram"]} size="2x" />
            </div>
          </div>
        </div>
        <div className="row-2">
          <h1 className="title">My Skills</h1>
          <div className="skills">
            <div className="skills-wrapper">
              <div className="skill">
                <img src={nodejs} alt="Javascript" />
                <div className="skill-desc">
                  <p className="skill-desc-text">Nodejs</p>
                </div>
              </div>
              <div className="skill">
                <img src={csharp} alt="C#" />
                <div className="skill-desc">
                  <p className="skill-desc-text">C#</p>
                </div>
              </div>
              <div className="skill">
                <img src={angular} alt="Angular" />
                <div className="skill-desc">
                  <p className="skill-desc-text">Angular</p>
                </div>
              </div>
              <div className="skill">
                <img src={typescript} alt="Typescript" />
                <div className="skill-desc">
                  <p className="skill-desc-text">Typescript</p>
                </div>
              </div>
              <div className="skill">
                <img src={react} alt="React" />
                <div className="skill-desc">
                  <p className="skill-desc-text">React</p>
                </div>
              </div>
              <div className="skill">
                <img src={sass} alt="Sass" />
                <div className="skill-desc">
                  <p className="skill-desc-text">Sass</p>
                </div>
              </div>
              <div className="skill">
                <img src={htmlcssjs} alt="Typescript" />
                <div className="skill-desc">
                  <p className="skill-desc-text">
                    HTML, CSS and frontend Javascript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-3">
          <h1 className="title">Recent Works</h1>
        </div>
        <div className="row-4">
          4
        </div>
        <div className="row-5">5</div>
      </HomeStyle>
    );
  }
}
const mapStatesToProps = states => {
  return {};
};
const mapDispatchWithProps = dispatch => {
  return {};
};

export default connect(
  mapStatesToProps,
  mapDispatchWithProps
)(Home);
