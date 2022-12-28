## Chapter11

### 1.concentration game

#### - 게임 설명

- 12장의 카드가 있고 두 장씩 서로 색이 같다.
- 모든 카드의 색을 보여주며 외울 수 있는 시간을 준다.
- 다시 전부 뒤집은 뒤 짝을 맞추게 한다.

### 2.concentration game self

#### - 게임 설명

- 위와 같은 조건에서 게임 시작 시 사용자로부터 전체 카드 개수 입력받게한다.
- 얼마나 걸렸는지 보여준다.

* 호출 스택과 이벤트 루프

- 호출 스택: 함수들의 실행 공간
- 백그라운드: 타이머, 이벤트 함수의 콜백 함수
- 테스크큐: 백그라운드의 함수가 잠시 머무는 공간
- 이벤트 루프: 호출 스택이 비어있을 때, 테스크큐에 있는 함수 하나씩 실행

ex) function aaa(){
setTimeout(()=>{
console.log('d');
}, 0);
console.log('c');

    setTimeout(()=>{
        console.log('a');
    aaa();
    },0);

    setTimeout(()=>{
        aaa();
        console.log('b');
    },0)

}

- 콘솔: a, c, c, b, d, d
