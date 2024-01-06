// 마우스 클릭되었을 시 placeholder 제거
function hidePlaceholder(element) {
    element.removeAttribute("placeholder");
    }

    
// 마우스 클릭 취소되었을 시, placeholder 다시 생성
function restorePlaceholderTodo(element) {
    if (element.value === "") {
        element.setAttribute("placeholder", "Write a to Do");
    }
}

function restorePlaceholderName(element) {
    if (element.value === "") {
        element.setAttribute("placeholder", "What is your name?");
    }
}

function restorePlaceholderSearch(element) {
    if (element.value === "") {
        element.setAttribute("placeholder", "Type your search term");
    }
}
