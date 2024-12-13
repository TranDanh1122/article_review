let shareWrapperEL = document.getElementById("share_wrapper")
let shareBtnEl = document.getElementById("share_box")
shareBtnEl.addEventListener('click' , function () {    
    if(shareWrapperEL.checkVisibility()) {
        shareWrapperEL.style.display = "none"
        shareBtnEl.classList.remove('mobile')

    }else {
        shareWrapperEL.style.display = "flex"
        shareBtnEl.classList.add('mobile')
    }
})