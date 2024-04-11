const gloPrefixes = [
    '0805', '0705', '0905', '0807', '0815', '0811', '0915'
];
const mtnPrefixes =[
'0803', '0806', '0703', '0903', '0906', '0806', '0706', '0813', '0810', '0814', '0816', '0913', '0916'
]
const airtelPrefixes =[
'0802', '0902', '0701', '0808', '0708', '0812', '0901', '0907'
]
const etisalatPrefixes = [
'0809', '0909', '0817', '0818', '0908'
]

const displayingDiv = document.getElementById('show')
displayingDiv.style.display ='block'
displayingDiv.innerHTML =`<p> show here</P>`


function searchButton() {
    const phoneNumber = document.getElementById('phoneNoInput').value;
const displayingDiv = document.getElementById('show')
    // displayingDiv.style.display ='block'
    if (phoneNumber.length !==11){
        alert('input a valid 11 digit number')
    }else if (phoneNumber){
        let isGlo = false;
    for (let i = 0; i < gloPrefixes.length; i++) {
        if (phoneNumber.startsWith(gloPrefixes[i])) {
            isGlo = true;
            break;
        }
    }
    if (isGlo) {
        displayingDiv.style.display= 'block'
        displayingDiv.innerHTML += `<p>The number belongs to Glo</p>`;
        return;
    } 

// codes for mtn starts here 

    let isMtn = false;
    for (let i =0; i < mtnPrefixes.length; i++){
        if (phoneNumber.startsWith(mtnPrefixes[i])){
            isMtn =true;
            break;
        }
    }if (isMtn){
        displayingDiv.style.display= 'block'
        displayingDiv.innerHTML += `<p>The number belongs to Mtn</p>`;
        console.log(displayingDiv);
        return;
    }


// codes for airtel starts here 

    let isAirtel = false;
    for (let i =0; i < airtelPrefixes.length; i++){
        if (phoneNumber.startsWith(airtelPrefixes[i])){
            isAirtel =true;
            break;
        }
    }if (isAirtel){
        displayingDiv.style.display= 'block'
        displayingDiv.innerHTML += `<p>The number belongs to airtel</p>`;
        return;
    }

// codes for 9mobile starts here 

    let isEtisalat = false;
    for (let i =0; i < etisalatPrefixes.length; i++){
        if (phoneNumber.startsWith(etisalatPrefixes[i])){
            isEtisalat =true;
            break;
        }
    }if (isEtisalat){
        displayingDiv.style.display= 'block'
        displayingDiv.innerHTML += `<p>The number belongs to 9mobile</p>`;
        return;
    }
    displayingDiv.style.display= 'block'
        displayingDiv.innerHTML += `<p>The number belongs to Glo</p>`;
}
}