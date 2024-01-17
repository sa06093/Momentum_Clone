function performSearch() {
    const searchQuery = document.getElementById('search').value;
    
    // 내 Google Custom 검색 엔진 ID
    const cx = '8117ea74cd34d4a8a';

    // 내 구글 API 키
    const apiKey = 'AIzaSyADNpIsx53gLbYPcj_OFxCCd2eJz_oIbgc';
    
    // input value값과 apiKey, cx를 이용해 URL 생성
    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${apiKey}&cx=${cx}`;
    
    // 생성한 URL을 이용해 네트워크 요청 보냄
    fetch(apiUrl)
        // 서버 응답을 JSON으로 parsing
        .then(response => response.json())
        // parsing된 JSON 데이터 'data' 매개변수로 받고, 이 데이터를 사용하여 openNewTab함수를 호출
        .then(data => openNewTab(data))
        //네트워크 요청이나 응답에서 오류가 발생하면 ".catch" 블록 실행하여 콘솔에 에러메시지 출력
        .catch(error => console.error('Error:', error));
}

function openNewTab(data) {
    const searchQuery = document.getElementById('search').value;
    
    // 검색어를 사용하여 Google 검색 URL 생성
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
    
    // 새 탭 열기 및 Google 검색 결과 페이지로 이동
    const newTab = window.open(googleSearchUrl, '_blank');  // '_blank'는 새 탭에서 열리도록 해줌
    
    // 열린 새 탭에 포커스 설정
    newTab.focus();
}

// 버튼 클릭이 아니라 Enter을 눌러도 검색되게 만들어 줌
function handleEnter(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}