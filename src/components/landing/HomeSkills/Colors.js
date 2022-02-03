import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        const {colors, tab, myRef} = this.props;
        return (
            <div className="colors" ref={myRef}>
                {
                colors.map((color, index) =>(
                    <button style={{background: color}} key={index}
                    onClick={() => tab(index)}
                    onKeyDown={() => tab(index)}/>
                ))
                }
            </div>
        )
    }
}

export default Colors
