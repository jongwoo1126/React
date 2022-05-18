import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Child1 from './component/Child1';
/*
  날짜 : 2022/05/18
  이름 : 박종우
  내용 : ch07.리액트 리덕스 실습하기

  Redux
   - 리액트에서 사용하는 전역 상태 관리 라이브러리
   - 전역 상태값은 리액트 모든 컴포넌트에서 공통으로 사용하는 상태값을 말한다.

  Redux 라이브러리 설치
   - npm install @reduxjs/toolkit
   - npm add redux-devtools-extension
*/

function App() {

  // 리덕스 저장소 dispatch 생성
  const dispatch = useDispatch();

  // 리덕스 저장소 state 가져오기
  const {value} = useSelector(state => state.value)
  const {count} = useSelector(state => state.count)

  // 이벤트 핸들러
  const onIncreament = () => {
    dispatch({type: 'increment'})
  }
  const onDecreament = () => {
    dispatch({type: 'decrement'})
  }
  const onReset = () => {
    dispatch({type: 'reset'})
  }
  const onCount = () => {
    dispatch({type: 'push'})
  }

  return (
    <div className="App">
      <h3>ch07.리액트 리덕스 실습</h3>
      <p>value : {value}</p>
      <p>count : {count}</p>
      <button onClick={onIncreament}>increment</button>
      <button onClick={onDecreament}>decrement</button>
      <button onClick={onReset}>reset</button>
      <button onClick={onCount}>count</button>

      <Child1/>
    </div>
    
  );
}

export default App;
