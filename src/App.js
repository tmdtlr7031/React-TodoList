import React, { Component } from 'react'; // Component를 App.js 안에 쓰기 위해 리액트를 불러오는 코드
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

// 태그 사이에 문자열 -> children으로 받아지나봄.
class App extends Component {

  id = 3

  state = {
    nowColor:'',
    color : [
              {seq: 0, name : '#343a40', selected: true},
              {seq: 1, name : '#f03e3e', selected: false},
              {seq: 2, name : '#12b886', selected: false},
              {seq: 3, name : '#228ae6', selected: false}
            ],
    input : '',
    todos : [
      {id : 0, text: ' 리액트 소개', checked: false, textColor: '#343a40'},
      {id : 1, text: ' 리액트 소개', checked: true, textColor: '#343a40'},
      {id : 2, text: ' 리액트 소개', checked: false, textColor: '#343a40'}
    ]
  }

  // 텍스트 내용 바뀌면 state 업데이트
  // e.target => 이벤트가 발생한 DOM을 가리킴
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔값
    });
  }

  // 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
  handleCreate = () => {
    const {input, todos, nowColor} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        textColor: nowColor
      })
    });
  }

  // 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id); // 파라미터로 받은 id가 몇 번째에 있는지 확인
    const selected = todos[index]; // 객체 선택

    const nextTodos = [...todos] // 배열 복사

    // selected 값 복사 후 checked 값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });

  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  choiceColor = (seq) => {
    const {color} = this.state;
    const index = color.findIndex(one => one.seq === seq)
    const choiceObj = color[index]
    const newColors = [...color]

    // 다른 컬러 선택 시 강조 표시 끄기 위해 false로 초기화
    newColors.map(obj => obj.selected = false)

    // 해당 컬러만 강조 표시
    newColors[index] = {
      ...choiceObj,
      selected: !choiceObj.selected
    };

    this.setState({
      color: newColors,
      nowColor: newColors[index].name
    });
  }

  render() {
    const { input, todos, color, nowColor } = this.state;
    const { handleChange,  handleCreate,  handleKeyPress, handleToggle, handleRemove, choiceColor} = this;

    return (
      <div>
        <TodoListTemplate 
        palette={(<Palette colors={color} onSelect={choiceColor} />)}
        form={(
          <Form value = {input} onKeypress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} nowColor={nowColor}/>
        )}>
          템플릿 완성
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App; // App 컴포넌트를 가져다 사용할 수 있는 코드