import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { StaticImage } from "gatsby-plugin-image";
import wind from 'assets/illustrations/debate.svg';
import { Header } from 'components/theme';
import { Wrapper, Banner, BannerBody, BannerDetails, BannerThumbnail, Content, ContentBodyLead, Line, ContentBody, ContentThumbnailLeft, ContentDetails, ContentThumbnailRight, ButtonSoon, ContentBody1 } from './styles';
import { Container, Button } from 'components/common';
import { Link } from "gatsby";
import Join from './Join';

function Thumbnail() {
 return (
   <StaticImage
     src={"./edwin.png"}
     alt="edwin lawrence"
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
            <h2>Welcome to the <br/><font color="#08755E"><u>Lawrence Debate Union</u>.</font></h2>
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
          <ContentDetails>
              <h1>Schedule</h1>
              <p>
                <b>Monday Business Meetings</b>: 6pm - 8pm
                <br/><br/>
                <b>Wednesday Social Justice Practice</b>: 7pm - 9pm
                <br/><br/>
                <b>Thursday British Parliamentary Practice</b>: 7pm - 9pm
              </p>
          </ContentDetails>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.08466271768737!2d-73.20028229307815!3d44.47593694018157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca7a5af98f7247%3A0xc856ec7b4587c81f!2s475%20Main%20St%2C%20Winooski%2C%20VT%2005404!5e0!3m2!1sen!2sus!4v1643929376767!5m2!1sen!2sus" width="450" height="450" allowfullscreen="" loading="lazy"></iframe>
        </ContentBody>

        <ContentBody as={Container} id="competitions">
          <ContentThumbnailRight>
              <img src={wind} alt="person at the podium"/>
          </ContentThumbnailRight>
          <ContentDetails>
              <h1>Competitions</h1>
              <p>
                <b>Rochester Tournament</b>: Feb 26th-27th
                <br/><br/>
                <Button theme={theme} as={Link} href="/register">
                Register →
                </Button>
                <br/><br/>
                <b>Schuman Challenge</b>: Feb 28th-Mar 1st
                <br/><br/>
                <Button theme={theme} as={Link} href="/register">
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
          <ContentDetails>
              <Join/>
          </ContentDetails>
        </ContentBody1>
        
      </Content>

    </Wrapper>
  );
};