import React, { Component } from 'react';

class RefComponent1 extends Component {

    // ref 선언
    refUid = React.createRef();     
    
    // 핸들러(이벤트 실행함수)
    btn1Click = () => {
        document.getElementById('uid').focus();
    }
    
    btn2Click = () => {
        this.refUid.current.focus();
    }


    render() {
        return (
            <div className='RefComponent1'>
                <h5>RefComponent1</h5>

                {/* id 식별자 사용 */}
                <input type='text' name='uid' id='uid'/>
                <button onClick={this.btn1Click}>포커스 입력</button>

                <hr/>

                {/* ref 식별자 사용 */}
                <input type='text' name='uid' ref={this.refUid}/>
                <button onClick={this.btn2Click}>포커스 입력</button>
            </div>    
        );
    }
}

export default RefComponent1;