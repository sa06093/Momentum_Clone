let = originalPlaceholders = {};

// 마우스 클릭되었을 시 placeholder 제거
function hidePlaceholder(element) {
    const inputID = element.id;
    originalPlaceholders[inputID] = element.placeholder;
    element.removeAttribute("placeholder");
}

    
// 마우스 클릭 취소되었을 시, placeholder 다시 생성
function restorePlaceholder(element) {
    const inputID = element.id;
    if (element.value === "") {
        const originalPlaceholder = originalPlaceholders[inputID];
        console.log(originalPlaceholder);
        element.setAttribute("placeholder", originalPlaceholder);
    }
}