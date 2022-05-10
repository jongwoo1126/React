import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import MyFuncComponent from './components/MyFuncComponent';
import ComponentParent from './components/ComponentParent';
import PropsComponent1 from './components/PropsComponent1';
import StateComponent1 from './components/StateComponent1';
import StateComponent2 from './components/StateComponent2';
import RefComponent1 from './components/RefComponent1';
import RefComponent2 from './components/RefComponent2';
import LifeCycleComponent from './components/LifeCycleComponent';
/*
  날짜 : 2022/05/10
  이름 : 박종우
  내용 : React 컴포넌트 실습

  컴포넌트(Component)
   - UI 또는 기능을 독립적으로 나뉜 모듈형태
   - 컴포넌트는 클래스형과 함수형으로 나뉨
*/
function App() {
  return (
    <div>
      <h3>ch03.React 컴포넌트 실습</h3>

      <h4> 클래스형 컴포넌트</h4>
      <MyClassComponent />

      <h4> 함수형 컴포넌트</h4>
      <MyFuncComponent />

      <h4> 부모, 자식 컴포넌트</h4>
      <ComponentParent />

      <h4>컴포넌트 props 실습</h4>
      <PropsComponent1 tit="props 실습1" msg="속성을 갖는 클래스형 컴포넌트 실습"/>
      <PropsComponent1 tit="props 실습2" msg="속성을 갖는 함수형 컴포넌트 실습"/>

      <h4>컴포넌트 stat 실습</h4>
      <StateComponent1/>
      <StateComponent2/>

      <h4>컴포넌트 ref 실습</h4>
      <RefComponent1/>
      <RefComponent2/>

      <h4>컴포넌트 LifeCycle 실습</h4>
      <LifeCycleComponent/>
    </div>
  );
}

export default App;
