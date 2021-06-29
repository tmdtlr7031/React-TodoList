import React, { Component } from 'react';
import './Palette.css';

// ‘리스트’ 를 렌더링하게 될 때는, 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성.
//  나중에 최적화 가능하기 때문
class PaletteItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.selected !== nextProps.selected; // 상태가 바뀔때만 해당 컴포넌트만 렌더링
    }

    render() {
        const {seq, name, selected, onSelect} = this.props;

        return(
            <div className={`color ${selected ? ' active' : ''}`} 
                    onClick={()=>onSelect(seq)} 
                    style={{background: name}} 
                    />
        );
    };
}

export default PaletteItem;