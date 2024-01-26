let firstImg = document.querySelector('#first_slider')
let secondImg = document.querySelector('#second_slider')
let thirdImg = document.querySelector('#third_slider')
let chevronLeft = document.querySelector('#chevron_left')
let chevronRight = document.querySelector('#chevron_right')
let dot1 = document.querySelector('.dot1')
let dot2 = document.querySelector('.dot2')
let dot3 = document.querySelector('.dot3')

let position = 0;
dot1.addEventListener('click', () =>{
    firstPage();
})  
dot2.addEventListener('click', () =>{
    secondPage();
})
dot3.addEventListener('click', () =>{
    thirdPage();
})
chevronRight.addEventListener('click', () =>{
    position += 1
    if(position == 3){
        position = 0
    }
    slide(position)

    console.log(position);
})
chevronLeft.addEventListener('click', () =>{
    position -= 1
    if(position == -1){
        position = 2
    }
    slide(position)

    console.log(position);
})
function autoPlay(delay = 3000) {
    return setInterval(() => {
        position += 1
        if(position == 3){
            position = 0
        }
        slide(position)
    }, delay)
  }
autoPlay();
function slide(position){
    if(position == 1){
        secondPage();
    }else if(position == 2){
        thirdPage()
    }else if(position == 0){
       firstPage();

    }
    
}

function firstPage(){
    firstImg.style.visibility = "";
        thirdImg.style.visibility = "";

        firstImg.src = 'https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_308,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png'
        secondImg.src = 'https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_301,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png'
        thirdImg.src = 'https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_313,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png'
}
function secondPage(){
    firstImg.style.visibility = "";
    thirdImg.style.visibility = "";
    firstImg.src = 'https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_360,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png'
    secondImg.src = 'https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_262,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png'
    thirdImg.src = 'https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_440,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png'
}
function thirdPage(){
    firstImg.src = ''
    firstImg.style.visibility = "hidden";
    secondImg.src = 'https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_284,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png'
    thirdImg.src = ''
    thirdImg.style.visibility = "hidden";
}
