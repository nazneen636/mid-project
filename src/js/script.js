person()
date()
time()

function person(){
  const personSelectField= document.getElementById('personSelectField')
  const personSelect= document.getElementById('personSelect')
  const pList= document.getElementById('pList')
  const pSelectImg= document.getElementById('pSelectImg')
  const personOptions= document.getElementsByClassName('personOptions')
  
  personSelectField.onclick= function(){
    pList.classList.toggle('hide')
    pSelectImg.classList.toggle('rotate')
  }
  
  for(option of personOptions){
    option.onclick = function(){
      personSelect.innerHTML= this.textContent
      pList.classList.toggle('hide')
      pSelectImg.classList.toggle('rotate')
    }
  }
}

function date(){
  const dateSelectField= document.getElementById('dateSelectField')
  const dateSelect= document.getElementById('dateSelect')
  const dList= document.getElementById('dList')
  const dSelectImg= document.getElementById('dSelectImg')
  const dateOptions= document.getElementsByClassName('dateOptions')

  dateSelectField.onclick= function(){
    dList.classList.toggle('hide')
    dSelectImg.classList.toggle('rotate')
  }

  for(option of dateOptions){
    option.onclick= function(){
      dateSelect.innerHTML= this.textContent
      dList.classList.toggle('hide')
      dSelectImg.classList.toggle('rotate')
    }
  }
}

function time(){
  const timeSelectField= document.getElementById('timeSelectField')
  const timeSelect= document.getElementById('timeSelect')
  const tList= document.getElementById('tList')
  const tSelectImg= document.getElementById('tSelectImg')
  const timeOptions= document.getElementsByClassName('timeOptions')

  timeSelectField.onclick= function(){
    tList.classList.toggle('hide')
    tSelectImg.classList.toggle('rotate')
  }

  for(option of timeOptions){
    option.onclick= function(){
      timeSelect.innerHTML= this.textContent
      tList.classList.toggle('hide')
      tSelectImg.classList.toggle('rotate')
    }
  }
}


$('.slider').slick({
    arrows:false,
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  });

  $('.menu-slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    // asNavFor: '.menu-list-slider'
});

// Initialize the menu list slider
// $('.menu-list-slider').slick({
//     arrows: false,
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     fade: true,
//     cssEase: 'linear',
//     asNavFor: '.menu-slider',
//     focusOnSelect: true
// });

// chef=================
$('.chef-slider').slick({
  arrows:false,
  dots: false,
  autoplay:true,
  autoplaySpeed: 2000,
  fade: true,
  // asNavFor: '.chef-text-slider',
  cssEase: 'linear',
  focusOnSelect: true,
});
// $('.chef-text-slider').slick({
//   arrows:false,
//   dots: false,
//   autoplay:false,
//   autoplaySpeed: 2000,
//   fade: true,
//   asNavFor: '.chef-slider',
//   cssEase: 'linear'
// });
// chef=================

$('.laurels-slider').slick({
  arrows:false,
  dots: false,
  autoplay:true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear'
});

$('.instagram-slider ').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  centerPadding: '32px',
  variableWidth: true,
  autoplay:true,
  autoplaySpeed: 1500,
});




$('.right-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  centerPadding: '32px',
  autoplay:true,
  autoplaySpeed: 1500,
});

