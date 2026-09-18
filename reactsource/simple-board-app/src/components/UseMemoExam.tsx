import { useMemo, useRef, useState } from 'react';



const isPrime = (num: number) => {
    console.log('소수 판단 중...')
    for (let i = 2; i < 123456780; i++) {
        // 실행 비용이 높은 연산으로 가정
    }

    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const UseMemoExam = () => {

    "use no memo";

    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');


    // useMemo 훅을 사용하기 전
    const checkPrime = isPrime(number);

    // useMemo 훅을 사용한 후    
    // const checkPrime = useMemo(() => isPrime(number), [number]);


    return (
        <div className='m-3'>
            <div>
                <h2 className="text-2xl">useMemo 사용하기</h2>
                <input type="number" className="border border-black" placeholder='소수 판단할 숫자 입력' value="" onChange="" />
            </div>
            <p>정수 </p>
            <input type="text" className="border border-black" placeholder='이름 입력(소수 판단과 무관)' value="" onChange="" />
            <p>입력한 이름:</p>
        </div>
    );
};

export default UseMemoExam;