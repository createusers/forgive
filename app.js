// value
let nameVal = "",
    tryVal = 0;

// first
// const next = document.querySelector('#next'),
//       nameErr = document.querySelector('.name-err'),
//       nameIn = document.querySelector('#name-in'),
//       con1 = document.querySelector('.con1'), 
//       con2 = document.querySelector('.con2');

// next.addEventListener('click', () => {
//     if(nameIn.value == ""){
//         nameErr.innerHTML = "Nama tidak boleh kosong!";
//     }else{
//         nameVal = nameIn.value;
//         con1.style.opacity = '0';
//         setTimeout(()=>{
//             con1.classList.add('d-none');
//             con2.classList.remove('d-none');
//             con2.style.opacity = '1';
//         }, 500);
//     }
// })
// main
const disBtns = document.querySelectorAll('.discover-btn'),
      btnYa = document.querySelector('.btn-ya'),
      btnGaFirst = document.querySelector('.btn-ga-first');

const showBtn = (btn, num) => {
    btn.classList.add('d-none');
    num == '4' ? 
            document.querySelector(`[data-num~="1"]`).classList.remove('d-none'): 
            document.querySelector(`[data-num~="${parseInt(num)+1}"]`).classList.remove('d-none');
    tryVal++; 
}

btnGaFirst.addEventListener("click", () => {
    showBtn(btnGaFirst, 1);
});

disBtns.forEach(disBtn => {
    disBtn.addEventListener('mouseover', () => {
        const btnGa = disBtn.querySelector('.btn-ga');
        if(!btnGa.classList.contains('d-none')){
            showBtn(btnGa, btnGa.dataset.num)
        }
    })
})