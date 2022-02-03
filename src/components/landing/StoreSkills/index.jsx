import React, { useContext } from 'react';
import { Link } from "gatsby";
import { Row, Col } from "react-grid-system";
import { setConfiguration } from 'react-grid-system';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import recycle from 'assets/illustrations/recycle.svg';
import cow from 'assets/illustrations/cow.svg';
import sticker from 'assets/illustrations/sticker.svg';
import foodScore from 'assets/illustrations/foodScore.png';
import { Button } from 'components/common';
import { Wrapper, SkillsWrapper, BrowseWrapper, Details, Thumbnail, Thumbnail2 } from './styles';

// explain foodScore system in alt

export const StoreSkills = () => {
  const { theme } = useContext(ThemeContext);
  setConfiguration({ breakpoints: [700, 768, 992, 1200, 1600] });

  return (
    <Wrapper id="about">

      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <Row>
            <Col sm={4}>
              <Thumbnail theme={theme}>
                <img src={recycle} alt="bag filled with package free goods" />
              </Thumbnail>
              <h2>minimal packaging</h2>
              <p>
              the <div className="tooltip"><u className="dotting">reUSE system</u><span className="tooltiptext"><b>learn more</b><br/><a className="linkstyle" href="/reUSE" rel="noreferrer"><span aria-label="arrow towards the right" role="img">
                →
              </span> </a></span></div>, homemade essentials, and bulk bins. no packaging means no waste!
              </p>
            </Col>
            <Col sm={4}>
              <Thumbnail theme={theme}>
                <img src={cow} alt="cartoon cow" />
              </Thumbnail>
              <h2>cruelty free</h2>
              <p>
              all of the products in our stores are certified vegan. healthier for you, the animals, and the earth.
              </p>
            </Col>
            <Col sm={4}>
              <Thumbnail theme={theme}>
                <img src={sticker} alt="produce sticker" />
              </Thumbnail>
              <h2>produce stickers: nope!</h2>
              <p>
              easier to wash and no sticky residue from those pesky stickers. we saved you the hassle.
              </p>
            </Col>
          </Row>
        </Details>
      </SkillsWrapper>

      <br/><br/><br/>

      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <Row>
            <Col sm={12}>
              <Thumbnail2 theme={theme}>
                <img src={foodScore} alt="explanation of the foodScore system" />
              </Thumbnail2>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button theme={theme} as={Link} href="/reUSE">
                foodScore framework →
              </Button>
            </Col>
          </Row>
        </Details>
      </SkillsWrapper>

      <br/><br/><br/>

      <BrowseWrapper as={Container}>
      <Details theme={theme}>

        <Row>
          <Col>
            <h1>browse by section:</h1>
            <h3>L - local | O - organic | S - low sodium</h3>
          </Col>
        </Row>
        
        <Row>
          <Col sm={4}>
            <h2 color="red">fruits | <span className="green_text">A+</span></h2>
            <p>
            🍎 apples | LOS
            <br/>
            🍌 bananas | OS
            <br/>
            🍓 strawberries | LOS
            <br/>
            🫐 blueberries | LOS
            <br/>
            🥭 mangos | OS
            <br/>
            🍊 tangerines | LOS
            <br/>
            </p>
          </Col>
          <Col sm={4}>
            <h2 color="green">vegetables | <span className="green_text">A+</span></h2>
            <p>
            🥬 greens (incl. kale) | LOS
            <br/>
            🧅 onions | LOS
            <br/>
            🧄 garlic | LOS
            <br/>
            🥒 cucumbers | LOS
            <br/>
            🌶 peppers | LOS
            <br/>
            🍆 eggplant | LOS
            <br/>
            </p>
          </Col>
          <Col sm={4}>
            <h2 color="orange">grains & bulk | <span className="green_text">A</span></h2>
            <p>
            🍞 wheat | OS
            <br/>
            🥣 oat | LOS
            <br/>
            🌾 rice | OS
            <br/>
            🌾 barley | OS
            <br/>
            🌾 quinoa | OS
            <br/>
            🌾 farro | OS
            <br/>
            🌾 amarath | OS
            <br/>
            </p>
        </Col>
        </Row>

        <Row>
          <Col>
            <b>more categories + info coming soon.</b>
          </Col>
        </Row>

      </Details>
      </BrowseWrapper>
      
      <br/><br/><br/>

    </Wrapper>
  );
};
