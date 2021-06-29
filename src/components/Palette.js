import React, { Component } from 'react';
import PaletteItem from './PaletteItem.js';

class Palette extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.colors !== nextProps.colors; // colors 값이 바뀔때만 렌더링
    }

    render () {
        const {colors, onSelect} = this.props;
        const colorList = colors.map(
            ({seq, name, selected}) => ( <PaletteItem seq={seq} name={name} selected={selected} onSelect={onSelect} key={seq} /> ));

        return (
            <div className="palette">
                {colorList}
            </div>
        );
    };
}

const Color = ({color, active, onClick}) => {

}


export default Palette;