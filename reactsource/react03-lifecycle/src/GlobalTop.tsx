import { useEffect, useState } from "react";
import type { UserType } from "./LocalJsonFetcher";

const GlobalTop = ({ myLinkClick }: { myLinkClick: (num: number) => void }) => {
  console.log("1. 컴포넌트 실행");

  const [myList, setMyList] = useState<UserType[]>([]);

  // myData.json 가져오기
  const getData = async () => {
    const response = await fetch(`./data/myData.json`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    console.log("3. useEffect 실행");
    // 렌더링 할때 myData.json 가지고 오기
    const fetchData = async () => {
      const localData = await getData();
      setMyList(localData);
    };
    fetchData();
  }, []);

  console.log("2. return 실행(rendering)");
  return (
    <div>
      <ul>
        {myList.map((data) => (
          <li key={data.id}>
            {/* 이름 클릭시 해당 user 상세정보 가져오기 */}
            <a
              href={data.id}
              data-id={data.num}
              onClick={(e) => {
                e.preventDefault();
                // data- 값을 이용시
                myLinkClick(Number(e.currentTarget.dataset.id));
              }}
            >
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalTop;
