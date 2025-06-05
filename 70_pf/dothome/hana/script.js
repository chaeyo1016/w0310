<body>
    
</body>







/* 

객체 형식
{
속성: 숫자,
속성: 문자열,
메서드: function(){},
...
}
$(document)
$(this)
$('.tabs div')


이벤트 메서드
ready(function(){}) -> 준비한다
click(function(){})

eq(n) -> n은 0,1,2,.....-> n번째 요소를 선택한다.
siblings('선택자') -> 형제들을 선택한다.
index() -> 순번을 가져온다.


addClass('클래스명') -> 클래스를 추가한다.
removeClass('클래스명') -> 클래스를 제거한다.
index() -> 순번을 가져온다.
CSS({속성: 값, 속성: 값, ...}) -> CSS를 적용시킨다.
*/
$(document).ready(function(){
    // 1.탭 버튼을 클릭하면 함수 실행
    $('.tabs .btn a').click(function(){
        // 2.갤러리 버튼에 .active클래스 추가
        $(this).addClass('active');
        // 3.this의 형제 .active클래스 제거
        $(this).siblings().removeClass('active');
        // 4.클릭한 버튼의 순번을 idx에 저장
        var idx = $(this).index();
        // 5. idx순번에 해당하는 div를 보여준다.
        $('.tabs div').eq(idx).css({dispaly:'block'});
        // 6. idxt순번에 해당하는 div의 형제는 숨긴다.
        $('.tabs div').eq(idx).siblings('div').css({dispaly:none});
    });
    // 이벤트 발생 주체

    $('.tabs div:nth-of-type(1).hide()')
    $('.tabs div:eq(2)')
});

// 문서가 준비되면 함수를 실행
$(document).ready(function(){
    // 1. 공지사항의 첫 번째 li를 클릭하면
    $('.notice li:first-of-type').click(function(){
        // 2.팝업 창이 보인다.
        $('.modal').show();
    });
    // 3.팜업 창의 닫기 버튼을 클릭하면
    $('.modal a').click(fundtion(){

    });


});