import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes} from 'react-router-dom';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Greeting from './component/Greeting';
import Home from './component/Home';
import Query from './component/Query';
import Param from './component/Param';

/*
 날짜 : 2022/05/16
 이름 : 박종우
 내용 : React Router 실습

 React Router
  - SPA(Single Page Application)을 개발하기 위한 화면(컴포넌트) 이동을 Router라고 한다.
  - 'npm add react-router-dom' 라이브러리 설치
  - 리액트 프로젝트에 Router 기능을 활성화 하기 위해 index.js => <BrowserRouter> 실행
*/
function App() {
  return (
    <div className="App">
      <h1>ch06.React Router</h1>

      <p>
        <Link to='/'>Home</Link>/
        <Link to='/hello'>hello</Link>/
        <Link to='/welcome'>welcome</Link>/
        <Link to='/greeting'>greeting</Link>
      </p>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hello' element={<Hello/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/greeting' element={<Greeting/>}/>
      </Routes>

      <p>
        <Link to='/query?name=홍길동'>query1</Link>/
        <Link to='/query?name=홍길동&age=21'>query2</Link>/
        <Link to='/query?name=홍길동&age=21&addr=부산'>query3</Link><br/>

        <Link to='/param/홍길동'>param1</Link>/
        <Link to='/param/홍길동/21'>param2</Link>/
        <Link to='/param/홍길동/21/부산'>param3</Link>
      </p>

      <Routes>
        <Route path='/query' element={<Query/>}/>
        <Route path='/param/:name' element={<Param/>}/>
        <Route path='/param/:name/:age' element={<Param/>}/>
        <Route path='/param/:name/:age/:addr' element={<Param/>}/>
      </Routes>
    </div>
  );
}

export default App;
