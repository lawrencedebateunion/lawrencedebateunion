import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { StaticImage } from "gatsby-plugin-image";
import map from 'assets/illustrations/map.svg';
import wind from 'assets/illustrations/debate.svg';
import { Header } from 'components/theme';
import { Wrapper, Banner, BannerBody, BannerDetails, BannerThumbnail, Content, ContentBodyLead, Line, ContentBody, ContentThumbnailLeft, ContentDetails, ContentThumbnailRight, ButtonDisabled, ContentBody1, Label } from './styles';
import { Container, Button } from 'components/common';
import { Link } from "gatsby";
import Join from './Join';

function Thumbnail() {
 return (
   <StaticImage
     src={"./edwin.png"}
     alt="debate house"
   />
 )
}

export const Landing = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header/>
      <Banner>
        
        <BannerBody as={Container}>
          <BannerDetails theme={theme}>
            <h1>We speak truth to power.</h1>
            <h2>Welcome to the <br/><font color="#08755E"><u>Lawrence Debate Union.</u></font></h2>
          </BannerDetails>
        </BannerBody>
        <BannerThumbnail>
            <Thumbnail/>
          </BannerThumbnail>
      </Banner>
   

      <Content>

        {/*<ContentBodyLead id="down">
              <h1>Schedule</h1>
  </ContentBodyLead>*/}

        <ContentBody as={Container} id="schedule">
          <ContentDetails theme={theme}>
              <h1>Schedule</h1>
              <p>
                <b>Monday Business Meetings</b>: 6pm - 8pm
                <br/><br/>
                <b>Wednesday Social Justice Practice</b>: 7pm - 9pm
                <br/><br/>
                <b>Thursday British Parliamentary Practice</b>: 7pm - 9pm
                <br/><br/>
                All meetings take place at <a className="linkstyle" href="https://goo.gl/maps/zqu57ZdHanWoxNyH6" target="_blank" rel="noreferrer">475 Main Street (Huber House)</a>.
              </p>
          </ContentDetails>
          <ContentThumbnailLeft>
              <img src={map} alt="person at the podium"/>
          </ContentThumbnailLeft>
        </ContentBody>

        <ContentBody as={Container} id="competitions">
          <ContentThumbnailRight>
              <img src={wind} alt="Person speaking at a podium."/>
          </ContentThumbnailRight>
          <ContentDetails theme={theme}>
            <h1>
              Competitions
            </h1>
            <p>
              <b>Rochester Tournament</b>: Feb 26th-27th
              <br/><br/>
              <ButtonDisabled theme={theme}>
                Registration Closed
              </ButtonDisabled>
              <br/><br/>
              <b>Schuman Challenge</b>: Feb 28th-Mar 1st
              <br/><br/>
              <Button theme={theme} as={Link} href="/register_schuman">
                Register →
              </Button>
              <br/><br/>
              <b>Vanderbilt Tournament</b>: Mar 11th-14th
              <br/><br/>
              <Button theme={theme} as={Link} href="/register">
                Register →
              </Button>
              <br/><br/>
            </p> 
          </ContentDetails>
        </ContentBody>

        <ContentBody1 as={Container} id="contact">
          <ContentDetails theme={theme}>
          <Label>
            Contact
          </Label>
              <Join/>
          </ContentDetails>
        </ContentBody1>
        
      </Content>

    </Wrapper>
  );
};