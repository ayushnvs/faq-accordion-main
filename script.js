let answerNodes = document.querySelectorAll('p.answer')

for (n=0; n<answerNodes.length; n++) {
    let answer = answerNodes[n]
    let seeBtn = answer.parentElement.querySelector("img[alt*='see']")
    let hideBtn = answer.parentElement.querySelector("img[alt*='hide']")

    if (n == 0) {
        if (seeBtn) seeBtn.style.display = "none"
    } else {
        answer.style.display = "none"
        if (hideBtn) hideBtn.style.display = "none"
    }

    seeBtn.addEventListener("click", () => {
        seeBtn.style.display = "none"
        hideBtn.style.display = ""

        answer.style.display = "block"
    })

    hideBtn.addEventListener("click", () => {
        seeBtn.style.display = ""
        hideBtn.style.display = "none"

        answer.style.display = "none"
    })
}

