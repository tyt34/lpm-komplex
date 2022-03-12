let slideIndex = 1
let timer = 3 // seconds
let mainBlock = document.getElementsByClassName('partner')
let play
//let nowNumInStr = 1
let nowNumInStr
let disWid = document.body.clientWidth
let num1
let num2
let num3

autoPlay('play')
//autoPlay('stop')
searchMouse()
searchWidDis()
startWidDis()
showSlides(slideIndex, nowNumInStr)

function startWidDis() {
  if (disWid < 600) {
    nowNumInStr = 1
    //showSlides(slideIndex, nowNumInStr)
  } else if ((disWid > 599) && (disWid < 750)) {
    nowNumInStr = 2
    //showSlides(slideIndex, nowNumInStr)
  } else if (disWid > 750) {
    nowNumInStr = 3
    //showSlides(slideIndex, nowNumInStr)
  }
}

function searchWidDis() {
  window.addEventListener('resize',function(){
    disWid = document.body.clientWidth
    if (disWid < 700) {
      nowNumInStr = 1
      showSlides(slideIndex, nowNumInStr)
    } else if ((disWid > 699) && (disWid < 800)) {
      nowNumInStr = 2
      showSlides(slideIndex, nowNumInStr)
    } else if (disWid > 800) {
      nowNumInStr = 3
      showSlides(slideIndex, nowNumInStr)
    }
  })
}

function nextSlide() {
  showSlides(slideIndex += 1, nowNumInStr)
}

function previousSlide() {
  showSlides(slideIndex -= 1, nowNumInStr)
}

function showSlides(n, numInStr) {
  let slides = document.getElementsByClassName('partner__slide')
  function onOrder(num) {
    slides[num].style.order = -1
  }
  function offOrder(num) {
    slides[num].style.removeProperty('order')
  }
  let all = slides.length
  let par = slides[0].parentElement
  if (n > all) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = all
  }
  for (let slide of slides) {
    slide.style.display = 'none'
  }
  if (slideIndex > all) {
    slideIndex = 1
  }

  if (numInStr === 1) {
    slides[slideIndex - 1].style.display = 'flex'
  }  else if (numInStr === 2) {
    if (slideIndex === 1) {
      num1 = slideIndex - 1
      num2 = 1
      par.style.flexDirection = 'row'
    } else if ( (slideIndex > 1) && (slideIndex < all)) {
      num1 = slideIndex - 1
      num2 = slideIndex
      par.style.flexDirection = 'row'
    } else if (slideIndex === all) {
      num1 = 0
      num2 = slideIndex - 1
      par.style.flexDirection = 'row-reverse'
    }
    slides[num1].style.display = 'flex'
    slides[num2].style.display = 'flex'
  } else if (numInStr === 3) {
    //console.log('sI/all', slideIndex,'/',all)
    if (slideIndex === 1) {
      num1 = slideIndex - 1
      num2 = 1
      num3 = 2
      offOrder(3)
      offOrder(4)
      //console.log('01 -> \n')
      //console.log(num1, num2, num3)
      par.style.flexDirection = 'row'
    } else if ((slideIndex > 1) && (slideIndex < (all - 1.9))) {
      num1 = slideIndex - 1
      num2 = slideIndex
      num3 = slideIndex + 1
      offOrder(3)
      offOrder(4)
      //console.log('02 -> \n')
      //console.log(num1, num2, num3)
      par.style.flexDirection = 'row'
    } else if ((slideIndex > 1) && (slideIndex < (all - 0.9))) {
      num1 = slideIndex - 1
      num2 = slideIndex
      num3 = 0
      //slides[3].style.order = -1
      //slides[4].style.order = -1
      onOrder(3)
      onOrder(4)
      //console.log('03 -> \n')
      //console.log(num1, num2, num3)
      par.style.flexDirection = 'row'
    } else if (slideIndex === all) {
      num1 = slideIndex - 1
      num2 = 0
      num3 = 1
      onOrder(3)
      onOrder(4)
      //console.log('04 -> \n')
      //console.log(num1, num2, num3)
      par.style.flexDirection = 'row'
    }
    slides[num1].style.display = 'flex'
    slides[num2].style.display = 'flex'
    slides[num3].style.display = 'flex'
  }
}

function searchMouse() {
  mainBlock[0].onmouseover = function() {
    autoPlay('stop')
    //searchWidDis()
  }
  mainBlock[0].onmouseleave = function() {
    autoPlay('play')
    //searchWidDis()
  }
}

function autoPlay(status) {
  if (status === 'play') {
    play = setInterval( function() {
      showSlides(slideIndex++, nowNumInStr)
    }, timer*1000)
  } else if (status === 'stop') {
    clearInterval( play )
  }
}
