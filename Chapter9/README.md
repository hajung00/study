## Chapter9

### 1. tictactoe game

#### - 게임 설명

- 두 명이 번갈아가며 O와 X를 3x3판에 써서 같은 글자를 가로, 세로 혹은 대각선 상에 놓이도록 하는 놀이이다.

### 2. tictactoe game self

#### - 게임 설명

- 위와 같은 방법에 컴퓨터의 turn을 설정해 준다.

* 이벤트 버블링

- 이벤트가 발생할 때 부모 태그에도 동일한 이벤드가 발생하는 현상
  ex) td의 부모태그 tr, tr의 부모태그 table
  $table.addEventListener('click', callback);
- td를 클릭하면 이벤트 버블링으로 table까지 전달됨.
- 장점: event.target과 event.currenttarget사용해서 여러개 이벤트 달 것을 한번만 걸 수 있다.

* parentNode와 children

- parentMode: 현재 태그의 부모 태그 찾기
- children: 현재 태그의 자식 태그 찾기

* every, some
  배열.every(조건 함수): 배열의 모든 값이 조건을 만족하면 true, 하나라도 만족하지 않으면 falsefh return후 반복 중단
  배열.some(조건 함수): 하나라도 조건을 만족하는 요소가 있으면 true return하고 반복 중단
