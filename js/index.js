"use strict";

const isMobile = {
    Android: function (){
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function (){
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function (){
      return      navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Googole: function(){
      return navigator.userAgent.match(/Googole/i);
    },
    Windows: function (){
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function (){
    return  (
      isMobile.Android() ||
      isMobile.BlackBerry() ||  
      isMobile.iOS() || 
      isMobile.Opera() || 
      isMobile.Windows() ||
      isMobile.Googole());
    }
  };

 if(isMobile.any()){
     document.body.classList.add('mob');
      const arrow = document.querySelectorAll('.menu-arrow');
       if(arrow.length > 0){
         for(let item = 0; item < arrow.length; item++){
            const collection = arrow[item];
             collection.addEventListener('click', function e(){
                collection.nextElementSibling.classList.toggle('open');
                 collection.classList.toggle('active');
             })
         }
       }
 }
 else{
    document.body.classList.add('pc');
 }


 const burger = document.querySelector('.burger');
  const opens = document.querySelector('.header__body'); 
    burger.addEventListener('click', function (e){
      burger.classList.toggle('burger-open');
      opens.classList.toggle('openes');
      if(opens.classList.contains('openes')){
        document.body.style.overflow = 'hidden';
      }
      else{
        document.body.style.overflow = 'visible';
      }
    });
     
    const compos = document.querySelectorAll('.menu-item[data-goto]');
      for(let i = 0; i < compos.length; i++){
        const allItem = compos[i];
         allItem.addEventListener('click', tp);
      }
        function tp(e){
         const item = event.target; 
          if(item.dataset.goto){
             const items = document.querySelector(item.dataset.goto);
              const tps = items.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
               console.log(tps);
               window.scrollTo({
                top: tps,
                behavior: "smooth",
              })
              if(burger.classList.contains('burger-open')){
                burger.classList.remove('burger-open');
                opens.classList.remove('openes');
                document.body.style.overflow = 'visible';
              }
          }
          event.preventDefault();
        }


    //popup
    const popup = document.querySelectorAll('.menu__iteme');

      const time = 800;
    
     var click = true;

     if(popup.length > 0){
      for(let item = 0; item < popup.length; item++){
        const element = popup[item];
        element.addEventListener('click', function (e){
          const replaceElement = element.getAttribute('href').replace('#', '');
            const elem = document.getElementById(replaceElement);
            popupOpen(elem);
        event.preventDefault();
        })
      }
     }

     function popupOpen(element){
       if(element && click){
        element.classList.add('open');
        bodyHidden();
       }
     }

     const popupCl = document.querySelectorAll('.popup__closest');
      if(popupCl.length > 0){
        for(let item = 0; item < popupCl.length; item++){
          const element = popupCl[item];
         element.addEventListener('click', function (e){
          popupClosest(element.closest('.popup'));
          bodyNotHidden();
         });
        }
      }

      function popupClosest(element){
        element.classList.remove('open');
        click = false;
        setTimeout(function (e){
          click = true;
        }, time);
      }

     function bodyHidden(){
      const calcPadding = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
       document.body.style.paddingRight = calcPadding;
      document.body.style.overflow = 'hidden';
     }

     function bodyNotHidden(){
      setTimeout(function (e){
        document.body.style.paddingRight = '0px';
        document.body.style.overflow = 'visible';
      }, time);
     }


     //rating

     let obj = {
      name: 'pati102',
      age: 17,
      contry: 'Ua',
    }

    let {name: Pati = "inde"} = obj;

    console.log(Pati);


     const stars = document.querySelectorAll('.rating');
      if(stars.length > 0){
        initRating();
      }

      function initRating(){
        var starsActive, starsValue;
         let element;
         ratingValue();
         ratingActive();
     //     for(let item = 0; item < stars.length; item++){
       //     element = stars[item];
       //   }
          //  if(element.classList.contains('rating__mouseenter')){
        //       ratingMous(element);
        //     }
          function ratingValue(){
            starsValue = document.querySelector('.rating__value');
             starsActive = document.querySelector('.rationg__activeHover');
          }
          function ratingActive(item = starsValue.innerHTML){
          const calcWidthRating = item / 0.4;
            starsActive.style.width = `${calcWidthRating}%`;
         }
      //  function ratingMous(elem){
       //   const ratingInp = document.querySelectorAll('.rating__item');
      //     for(let item = 0; ratingInp.length; item++){
          //  const elements = ratingInp[item];
          //   elements.addEventListener('mouseenter', function (e){
        //     ratingValue(elem);
        //      ratingActive(elements.value);
        //    });
         //   elements.addEventListener('mouseleave', function (e){
        //      ratingActive();
        //    });
        //    elements.addEventListener('click', function (e){
        //      starsValue.innerHTML = item + 1;
        //    })
         //    }
      }
      
    


          //споилеры
      
          const allElementInSpoller = document.querySelectorAll('.block__item');
           if(allElementInSpoller.length > 0){
             for(let item = 0; item < allElementInSpoller.length; item++){
               const element = allElementInSpoller[item];
                const nextElement = element.nextElementSibling;
                 const nextNextElement = nextElement.nextElementSibling;
              element.addEventListener('click', function (e){
                if(nextNextElement.style.maxHeight){
                document.querySelectorAll('.block__content').forEach(item => item.style.maxHeight = null);
                nextElement.classList.remove('ActiveOpnesArrow');
                if(!nextElement.classList.contains("ActiveOpnesArrow")){
                  nextElement.classList.add('ActiveOpnesArrow');
                }
                else{
                  nextElement.classList.remove('ActiveOpnesArrow');
                }
                  const activeOpens = document.querySelectorAll('.ActiveOpnesArrow');
                  if(activeOpens.length > 0){
                    for(let item = 0; item < activeOpens.length; item++){
                      const element = activeOpens[item];
                      element.classList.add('ActiveOpnesArrow');
                    }
                  }
                }
                else{
                document.querySelectorAll('.block__content').forEach(item => item.style.maxHeight = null);
                 nextNextElement.style.maxHeight = 200 + 'px';
                 element.classList.toggle('ActiveOpnesArrow');
                 const activeOpens = document.querySelectorAll('.ActiveOpnesArrow');
                 if(activeOpens.length > 0){
                   for(let item = 0; item < activeOpens.length; item++){
                     const element = activeOpens[item];
                     element.classList.remove('ActiveOpnesArrow');
                   }
                   if(nextElement.classList.contains("ActiveOpnesArrow")){
                    nextElement.classList.remove('ActiveOpnesArrow');
                  }
                  else{
                   nextElement.classList.add('ActiveOpnesArrow');
                  }
                }
                document.addEventListener('click', function (e){
                  if(!event.target.closest('.block__ibt')){
                    document.querySelectorAll('.block__content').forEach(item => item.style.maxHeight = null);
                    nextElement.classList.remove('ActiveOpnesArrow');
                  }
                })
                event.preventDefault();
              }
             });
            }
           }

           const allElementArrow = document.querySelectorAll('.block__arrow');
            if(allElementArrow.length > 0){
               for(let item = 0; item < allElementArrow.length; item++){
                 const elementArrow = allElementArrow[item];
                  const nextElement = elementArrow.nextElementSibling;
                  const previuosElement = nextElement.previousElementSibling;
                   console.log(previuosElement);
                elementArrow.addEventListener('click', function (e){
                  if(nextElement.style.maxHeight){
                    document.querySelectorAll('.block__content').forEach(item => item.style.maxHeight = null);
                    previuosElement.classList.remove('ActiveOpnesArrow');
                    const activeOpens = document.querySelectorAll('.ActiveOpnesArrow');
                    if(activeOpens.length > 0){
                      for(let item = 0; item < activeOpens.length; item++){
                        const element = activeOpens[item];
                        element.classList.add('ActiveOpnesArrow');
                      }
                    }
                  }
                  else{
                    document.querySelectorAll('.block__content').forEach(item => item.style.maxHeight = null);
                    nextElement.style.maxHeight = 200 + 'px';
                    const activeOpens = document.querySelectorAll('.ActiveOpnesArrow');
                     if(activeOpens.length > 0){
                       for(let item = 0; item < activeOpens.length; item++){
                         const element = activeOpens[item];
                         element.classList.remove('ActiveOpnesArrow');
                       }
                     }
                     previuosElement.classList.add('ActiveOpnesArrow');
                     
                  }
                }) 
                document.addEventListener('click', function (e){
                  if(!event.target.closest('.block__ibt')){
                    document.querySelectorAll('.block__content').forEach(item => item.style.maxHeight = null);
                    nextElement.classList.remove('ActiveOpnesArrow');
                  }
                })
               }
            }
          
