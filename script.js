let firstImg = document.querySelector('#first_slider')
let secondImg = document.querySelector('#second_slider')
let thirdImg = document.querySelector('#third_slider')
let chevronLeft = document.querySelector('#chevron_left')
let chevronRight = document.querySelector('#chevron_right')

let position = 0;

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

function slide(position){
    if(position == 1){
        firstImg.style.visibility = "";
        thirdImg.style.visibility = "";
    firstImg.src = 'https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_360,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png'
    secondImg.src = 'https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_262,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png'
    thirdImg.src = 'https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_440,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png'
    }else if(position == 2){
            firstImg.src = ''
            firstImg.style.visibility = "hidden";
            secondImg.src = 'https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_284,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png'
            thirdImg.src = ''
            thirdImg.style.visibility = "hidden";
    }else if(position == 0){
        firstImg.style.visibility = "";
        thirdImg.style.visibility = "";

        firstImg.src = 'https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_308,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png'
        secondImg.src = 'https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_301,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png'
        thirdImg.src = 'https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_313,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png'

    }
    
}