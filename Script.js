
document.addEventListener('click', function(event) {
    var target = event.target;
    var message;
    if (target.tagName === 'BUTTON') {
        message = 'لقد قمت بالنقر على زر';
    } else if (target.tagName === 'INPUT') {
        message = 'Please here you will put your information'
    } else if (target.tagName === 'A') {
        message = 'Click Here to start new shopping'
    } else {
        message = 'لقد قمت بالنقر على عنصر آخر';
    }
    alert(message);
});