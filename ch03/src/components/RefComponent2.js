import React, { useRef } from 'react';

const RefComponent2 = () => {
    
    //ref 선언
    const refUid = useRef();
    const refName = useRef();

    // 핸들러(이벤트 실행함수)
    const btn1Click = () => {
        refUid.current.focus();
    }

    const btn2Click = () => {
        refName.current.focus();
    }

    return (
        <div className='RefComponent2'>
            <h5>RefComponent2</h5>

            {/* id 식별자 사용 */}
            <input type='text' name='uid' ref={refUid}/>
            <input type='text' name='name' ref={refName}/>

            <button onClick={btn1Click}>포커스 입력</button>
            <button onClick={btn2Click}>포커스 입력</button>
        </div>
    );
};

export default RefComponent2;