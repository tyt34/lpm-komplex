let sizeMonitor = window.innerWidth
let sizeImg = document.getElementsByClassName('tech__img')
let sizeInfo = document.getElementsByClassName('tech__info')
let sizeInfoL = document.getElementsByClassName('tech__info_l')
let sizeInfoR = document.getElementsByClassName('tech__info_r')
let numElements = sizeImg.length
let numInfoL = sizeInfoL.length
let numInfoR = sizeInfoR.length
let newSizeImg
let newSizeInfo
let newHeightImg
let newMarginInfo
let newMarginLRInfo

let checkSize = setInterval(
  () => {
    sizeMonitor = window.innerWidth
    newHeightImg = window.getComputedStyle( sizeImg[0] ).height
    if ( (sizeMonitor > 319) && (sizeMonitor < 768)) {
      newSizeImg = (sizeMonitor*0.54)+'px'
      newMarginLRInfo = -(sizeMonitor*0.062)+'px'
      if (sizeMonitor > 449) {
        newMarginInfo = ((Number(newHeightImg.split('px')[0])-80)/2)+'px'
      } else {
        newMarginInfo = ((Number(newHeightImg.split('px')[0])-60)/2)+'px'
      }
    } else if ( (sizeMonitor > 767) && (sizeMonitor < 1024)) {
      newSizeImg = (sizeMonitor*0.45)+'px'
      newMarginInfo = ((Number(newHeightImg.split('px')[0])-124)/2)+'px'
      newMarginLRInfo = -(sizeMonitor*0.039)+'px'
    } else if ( (sizeMonitor > 1023) && (sizeMonitor < 1280)) {
      newSizeImg = (sizeMonitor*0.36)+'px'
      newMarginInfo = ((Number(newHeightImg.split('px')[0])-158)/2)+'px'
      newMarginLRInfo = -(sizeMonitor*0.039)+'px'
    } else if ( (sizeMonitor > 1279) && (sizeMonitor < 1440)) {
      newSizeImg = (sizeMonitor*0.34)+'px'
      newMarginInfo = ((Number(newHeightImg.split('px')[0])-158)/2)+'px'
      newMarginLRInfo = -(sizeMonitor*0.039)+'px'
    } else if ( sizeMonitor > 1439) {
      newSizeImg = (sizeMonitor*0.45)+'px'
      newMarginInfo = ((Number(newHeightImg.split('px')[0])-158)/2)+'px'
      newMarginLRInfo = -(sizeMonitor*0.046)+'px'
    }
    for (let i=0; i<numElements; i++) {
      sizeImg[i].style.width = newSizeImg
      sizeInfo[i].style.height = newSizeInfo
      sizeInfo[i].style.marginTop = newMarginInfo
    }
    for (let i=0; i<numInfoL; i++) {
      sizeInfoL[i].style.marginRight = newMarginLRInfo
    }
    for (let i=0; i<numInfoR; i++) {
      sizeInfoR[i].style.marginLeft = newMarginLRInfo
    }
  }, 100
)
