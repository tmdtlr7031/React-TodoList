import React, { Component } from 'react';
import './TodoItem.css';

// ‘리스트’ 를 렌더링하게 될 때는, 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성. 나중에 최적화 가능하기 때문
class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked; // 상태가 바뀔때만 해당 컴포넌트만 렌더링
    }

    render () {
        const { text, checked, id, onToggle, onRemove, textColor } = this.props;
        /**
         *  e.stopPropagation() : onToggle 이 실행되지 않게. (상위 엘리먼트로 이벤트 전파 중단시키는 기능)
         *  &times; : 곱하기 (x) 표시
         **/
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {e.stopPropagation(); onRemove(id)}}>
                    &times;
                </div>
                <div className={`todo-text ${checked ? ' checked' : ''}`}>
                    <div style={{color: textColor}}>{text}</div>
                </div>
                { checked && (<div className="check-mark">✓</div>)}
            </div>
        );
    };
}

export default TodoItem;