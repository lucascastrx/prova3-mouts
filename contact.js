const contactBtn = document.querySelector("#contact-btn")
contactBtn.addEventListener('click', function(){
  const inputs = document.querySelectorAll('input')
  let isEmpty = false
  inputs.forEach(e => {
    if(e.value.trim() == ""){
      isEmpty = true
    }
  })

  if(isEmpty){
    alert('Não podem haver campos vazios no envio do formulário!')
  }else{
    document.location.href = 'index.html'
  }
})
