const dateInput = document.querySelector("#date");

// date 날짜 항상 어제 날짜까지만 가능하도록
const today = () => {
  // 오늘날짜
  const date = new Date();
  // 어제날짜
  date.setDate(date.getDate() - 1);
  console.log(date.toISOString()); // 2026-08-06T01:42:38.589Z
  return date.toISOString().split("T")[0];
};
dateInput.max = today();

async function load(date) {
  // 사용자의 날짜를 입력받아서 해당 날짜의 일별 박스 오피스 보여주기
  const url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=b2b54d1891e4b945f2e79546fb18e883&targetDt=";

  const requestUrl = url + date;

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);

    let result = "";
    dailyBoxOfficeList.forEach((item) => {
      result += `<tr>`;
      result += `<td>${item.rank}</td>`;
      result += `<td>${item.rankInten}</td>`;
      result += `<td><a href="${item.movieCd}">${item.movieNm}</a></td>`;
      result += `<td>${item.openDt}</td>`;
      result += `<td>${item.audiCnt}</td>`;
      result += `<td>${item.audiAcc}</td>`;
      result += `<td>${item.salesAcc}</td>`;
      result += `</tr>`;
    });

    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = result;
    table.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

// 사용자가 날짜를 변경하면 선택된 날짜 가져와서 데이터 요청하러 가기
dateInput.addEventListener("change", (e) => {
  const selDate = e.target.value;
  console.log(selDate);
  // selDate : 2026-08-05 => 20260805
  // selDate.replace("-", "").replace("-", "")
  // selDate.split("-").join("")
  load(selDate.split("-").join(""));
});

// 영화명 클릭시 영화상세정보 가져와서 화면에 보여주기
// 1) moiveCd 가져오기 : href
// 2) a 태그 기능 중지 : e.preventDefault()
// https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=b2b54d1891e4b945f2e79546fb18e883&movieCd=
const movieDetail = async (movieCd) => {
  const url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=b2b54d1891e4b945f2e79546fb18e883&movieCd=";
  const requestUrl = url + movieCd;
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    console.log(data);

    const info = data.movieInfoResult.movieInfo;

    // 화면에 보여주기
    let result = `<ul>`;
    result += `<li>영화명 : ${info.movieNm}</li>`;
    result += `<li>영어 영화명 : ${info.movieNmEn}</li>`;
    result += `<li>상영시간 : ${info.showTm}분</li>`;
    // 장르
    let genres = "";
    info.genres.forEach((genre) => {
      genres += `${genre.genreNm},`;
    });
    result += `<li>장르 : ${genres}</li>`;
    // 감독
    let directors = "";
    info.directors.forEach((director) => {
      directors += `${director.peopleNm},`;
    });
    result += `<li>감독 : ${directors}</li>`;
    // 출연배우
    let actors = "";
    info.actors.forEach((actor) => {
      actors += `${actor.peopleNm},`;
    });
    result += `<li>출연배우 : ${actors}</li>`;
    result += `<li>영화등급 : ${info.audits[0].watchGradeNm}</li>`;
    result += `</ul>`;

    document.querySelector("#detail").innerHTML = result;
  } catch (error) {}
};

document.querySelector("tbody").addEventListener("click", (e) => {
  e.preventDefault();

  const aTag = e.target;
  // 속성 href
  console.log(aTag.href);
  console.log(e.target.getAttribute("href"));
  const movieCd = aTag.getAttribute("href");
  movieDetail(movieCd);
});
