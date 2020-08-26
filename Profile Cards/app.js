const heading ='Please Meet Our Team';
let count = 0;

const typing = () => {
    if(count < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(count);
        count++;

        setTimeout(typing, 150);
    }
}


typing();