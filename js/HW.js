const btn = document.getElementById('btn');
const pass = document.getElementById('password');

btn.addEventListener('click',function(){
    if(pass.type == 'password'){
    pass.type = 'text';
    }
    else{
        pass.type = 'password';
    }
})