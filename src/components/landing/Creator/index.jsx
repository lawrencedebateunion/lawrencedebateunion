import React, { useContext, Component } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { GenericHeader } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, MeThumbnail, Details } from './styles';
import { StaticImage } from "gatsby-plugin-image";

function Me() {
 return (
   <StaticImage
     src={"./me.jpg"}
     alt="image of tomek botwicz, creator of plöt."
     width={375}
     height={375}
     className={"rounded"}
   />
 )
}

//https://coderrocketfuel.com/article/how-to-copy-text-to-the-clipboard-in-react-js
//https://tanyas27.medium.com/how-to-add-copy-to-clipboard-functionality-in-a-reactjs-app-45404413fdb2

export default class Ethaddress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copySuccess: false
    }
  }

  copyCodeToClipboard = () => {
    const text = "0xF6da772c47EaD8Edcc6347AAC4A366CC6cEA6DF4";
    navigator.clipboard.writeText(text);
    this.setState({copySuccess: true})
  }

  render() {
    return (
      <div>
        <div>
          <h1 onClick={() => this.copyCodeToClipboard()} onKeyDown={() => this.copyCodeToClipboard()}>
            <div className="square">
              <div className="text">
              <span><svg xmlns="http://www.w3.org/2000/svg" className="invert" width="24" height="24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 12l6 -9l6 9l-6 9z" />
  <path d="M6 12l6 -3l6 3l-6 2z" />
</svg>
              &nbsp;eth address</span>
              </div>
            </div>
          </h1>
          {
            this.state.copySuccess ?
            <div className="disappear" style={{"color": "green","font-weight":"bold"}}>
              copied <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" strokeWidth="2" stroke="green" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M9 12l2 2l4 -4" />
</svg>
            </div> : null
          }
        </div>
      </div>
    )
  }
}

export const Creator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <GenericHeader/>
      <Wrapper as={Container}>
        <MeThumbnail>
          <Me/>
        </MeThumbnail>
        <Details theme={theme}>
        <h1>
            
            </h1>
          <h1>
            created by</h1><h2>tomek botwicz
          </h2>
          <h1><svg xmlns="http://www.w3.org/2000/svg" className="invert" width="24" height="24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
</svg> <a href="https://www.tomek.org">tomek.org</a></h1>
          <h1><svg xmlns="http://www.w3.org/2000/svg" className="invert" width="23" height="22" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
</svg> <a href="https://www.twitter.com/tomekbotwicz">@tomekbotwicz</a></h1>
          <h1><svg className="invert" xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="18" height="14" x="3" y="5" rx="2"/><path d="m3 7 9 6 9-6"/></svg> <a href="mailto:tomek@plot.community">tomek@plot.community</a></h1>
          <Ethaddress/>
          {/*<h1>consultant: alex hall</h1>*/}  
        </Details>
      </Wrapper>
    </div>
  );
};
