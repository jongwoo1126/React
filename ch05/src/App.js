import logo from './logo.svg';
import './App.css';
import MyComponent1 from './component/MyComponent1';
import MyComponent2 from './component/MyComponent2';
import MyComponent3 from './component/MyComponent3';
/*
  날짜 : 2022/05/12
  이름 : 박종우
  내용 : ch05.React Hooks 실습

  React Hooks
   - 함수형 컴포넌트에서 기능 확장을 위해 제공하는 리액트 기능 함수
   - 함수 이름이 use~로 시작, 레퍼런스 참고

  useState()
   - 함수형 컴포넌트의 상대값을 관리하는 Hook
   - React 가장 기본 Hook
  
  useEffect
   - 함수형 컴포넌트가 랜더링 될때 특정 작업을 특정시점에 수행할 수 있는 Hook
   - 클래스형 컴포넌트의 생명주기 함수와 비슷한 역할
  
  useRef
   - 함수형 컴포넌트에서 특정 DOM에 대한 식별값을 설정하기 위한 Hook
*/
function App() {
  return (
    <div className='App'>
     <h3>ch05.React</h3>

     <h4>1)useState</h4>
     <MyComponent1/>
     <h4>2)useEffect</h4>
     <MyComponent2/>
     <h4>3)useRef</h4>
     <MyComponent3>useRef 실습</MyComponent3>
    </div>
  );
}

export default App;
