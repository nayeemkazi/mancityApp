import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";
import Reveal from "react-reveal/Reveal";
import HomeCards from "./cards";

class MeetPlayers extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          className="home_meetplayers"
          style={{
            background: `#fff url(${Stripes})`,
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show}></HomeCards>
              </div>
              <div className="home_text_wrapper">
                <div
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#fff"
                    add={{
                      //add block not working
                      marginBottom: "20px",
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    marginBottom: "20px",
                  }}
                >
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#fff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px",
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    marginBottom: "20px",
                  }}
                >
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#fff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px",
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div
                  style={{
                    marginBottom: "27px",
                    display: "inline-block",
                    border: "1px solid #0e1731",
                  }}
                >
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkTo="/the_team"
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
