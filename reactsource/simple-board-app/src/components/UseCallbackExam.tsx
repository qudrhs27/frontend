import { useEffect, useState } from 'react';


type DivBoxType = {
    fnBoxStyle: () => void;
    numberVar: number
}


const DivBox = ({ fnBoxStyle, numberVar }: DivBoxType) => {
    const [myStyle, setMyStyle] = useState({});

    useEffect(() => {
        console.log('박스 스타일 변경');

    }, [])

    return <div style={myStyle}>{numberVar}</div>
}

const UseCallbackExam = () => {

    // "use no memo";

    const [boxSize, setBoxSize] = useState(100);
    const [boxColor, setBoxColor] = useState(0);
    const [number, setNumber] = useState(0);
    const colorArr = ['red', 'green', 'blue'];

    const fnBoxStyle = () => {
        return {
            backgroundColor: `${colorArr[boxColor]}`,
            width: `${boxSize}px`, height: `${boxSize}px`,
            textAlign: 'center', lineHeight: `${boxSize}px`,
        }
    }

    // useCallback() 적용 코드
    // const fnBoxStyle = useCallback(() => {
    //     return {
    //         backgroundColor: `${colorArr[boxColor]}`,
    //         width: `${boxSize}px`, height: `${boxSize}px`,
    //         textAlign: 'center', lineHeight: `${boxSize}px`,
    //     }
    // }, [boxSize, boxColor])


    return (
        <div className='m-3'>
            <h2 className="text-2xl">useCallback 사용하기</h2>
            <button className="border border-orange-500 p-2 m-2" onClick="">
                크기 증가
            </button>
            <button className="border border-orange-500 p-2 m-2" onClick="">
                컬러 변경
            </button>
            <button className="border border-orange-500 p-2 m-2" onClick="">
                숫자 변경
            </button>
            <DivBox fnBoxStyle="" numberVar="" />
        </div>
    );
};

export default UseCallbackExam;