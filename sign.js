document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // 기본 동작 방지
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // 여기에 가입 로직을 넣어주세요 (예: 서버로 데이터 전송 등)
    // 가입이 성공했을 때, 성공 메시지를 출력하는 등의 코드를 작성할 수 있습니다.
    const message = `사용자명: ${username}<br>이메일: ${email}<br>비밀번호: ${password}`;
    document.getElementById('message').innerHTML = message;
  });
  