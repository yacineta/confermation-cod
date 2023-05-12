const pass = document.querySelector('#pass');
const cfPass = document.querySelector('#cf-pass');
const pAlert = document.querySelector('form p');
const btnRegister = document.querySelector('button');
const btnShow = document.querySelectorAll('label i');


function check(){
    console.log(pass.value);
    let check = (pass.value.length < 6);

    btnRegister.disabled = check;
    cfPass.disabled = check;
    cfPass.value = '';
    pAlert.className = 'alert';

}
check();
pass.addEventListener('keyup',check);

btnRegister.addEventListener('click', (e)=>{
    e.preventDefault();
    let txtErr = "Error! Confirm Password Don't Match";
    let txtSuccess = "ok! Confirm Password Don't Match";
    let result = (pass.value === cfPass.value);
    console.log(result);
    pAlert.textContent = result ? txtSuccess : txtErr;
    pAlert.className = result ? 'alert success' : 'alert danger';

});

btnShow.forEach(item => {
    let show = false;
    item.addEventListener('click',()=>{
        show = !show;
        console.log(item.parentElement);
        pass.setAttribute(
            'type',
            show ? 'text' : 'password'
            );
            cfPass.setAttribute(
                'type',
                show ? 'text' : 'password'
                );
            
    });
    
})


