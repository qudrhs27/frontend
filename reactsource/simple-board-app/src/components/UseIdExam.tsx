import { useEffect, useId } from 'react';


type FieldType = {
    label: string;
    name: string;
    autoFocus?: boolean;
}


const InputField = ({ label, name, autoFocus = false }: FieldType) => {
    const id = useId();

    useEffect(() => {
        if (autoFocus) {

        }
    }, [])

    return (
        <div className='flex justify-start mb-1'>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={name} className='border mx-2 p-1' />
        </div>
    );
}


const MyForm = () => {
    const commonId = useId();
    return (
        <div className='flex flex-col'>
            <InputField label={"아이디"} name="id" autoFocus />
            <InputField label={"이름"} name="name" />
            <div className='flex gap-2'>
                <label htmlFor="gender">성별</label>
                <input type="radio" name="gender" id="" />
                <label htmlFor="">남자</label>
                <input type="radio" name="gender" id="" />
                <label htmlFor="">여자</label>
            </div>
        </div>
    );
};


const UseIdExam = () => {
    return (
        <div className='m-3'>
            <h2 className="text-2xl">useId 사용하기</h2>
            <MyForm />
        </div>
    );
};

export default UseIdExam;