import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    // shouldComponentUpdate  : 리 렌더링 여부 (디폴트 : true)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos; // todos 값이 바뀔때만 렌더링
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        // 배열을 렌더링 할 때에는 key 값이 꼭 있어야함.
        // map 함수의 두번째 파라미터는 index
        // key => React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도움. (고유 식별자롤 주로 key로 이용)
        const todoList = todos.map(
            // "(todo) => (<TodoItem {...todo} ...(생략)" 이렇게하면 내부값이 자동으로 prop 설정됨
            ({id, text, checked, textColor}) => (
                                        <TodoItem id={id} text={text} checked={checked} textColor={textColor} 
                                        onToggle={onToggle} onRemove={onRemove} key={id} />
                                    ));

        return (
            <div>
                {todoList}
            </div>
        );
    };
}

export default TodoItemList;