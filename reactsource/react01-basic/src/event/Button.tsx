const Button = () => {
  // 버튼이 클릭 시 alert('버튼클릭')

  return (
    <div>
      <button onClick={() => alert("버튼클릭")} className="p-4 bg-orange-600">버튼 클릭</button>
    </div>
  );
};

export default Button;
