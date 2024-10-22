$(document).ready(function() {
    setRandomRed();

    $('.square').click(function() {
        if ($(this).hasClass('red')) {
            $(this).removeClass('red');
            setRandomRed();
        }
    });

    $('.square').hover(
        function() {
            $(this).addClass('shake');
        },
        function() {
            $(this).removeClass('shake');
        }
    );

    function setRandomRed() {
        $('.red').removeClass('red');
        
        const $availableSquares = $('.square').not('.red');
        
        const randomIndex = Math.floor(Math.random() * $availableSquares.length);
        $availableSquares.eq(randomIndex).addClass('red');
    }
});