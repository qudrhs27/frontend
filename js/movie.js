async function load() {
  // 사용자의 날짜를 입력받아서 해당 날짜의 일별 박스 오피스 보여주기
  const url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=b2b54d1891e4b945f2e79546fb18e883&targetDt=";
  let targetUrl = "";

  const inputDate = document.querySelector("#date");
  const btn = document.querySelector("button");
  btn.addEventListener("click", async () => {
    const date = inputDate.value;
    targetUrl = url + date;

    const response = await fetch(targetUrl);
    const data = await response.json();
    console.log(data);
    // 10개 가져오기
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);
  });
}
load();
