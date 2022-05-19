
  //Offcanvas toggles
  offcanvasToggle = document.getElementsByClassName("offcanvas-toogle")
  function toggleOffcanvas(event){
    var a = event.path[0].attributes
    var tg = document.getElementById(a.getNamedItem('target').value)
    tg.style.width = "250px";
  }
  for (let element of offcanvasToggle){
    element.addEventListener('click', toggleOffcanvas)
  }

  offcanvasClose = document.getElementsByClassName("offcanvas-close")
  function CloseOffcanvas(event){
    var a = event.path[0].attributes
    var tg = document.getElementById(a.getNamedItem('target').value)
    tg.style.width = "0";
  }
  for (let element of offcanvasClose){
    element.addEventListener('click', CloseOffcanvas)
  }

//Incavas to offcanvas transformer
function incanvas(){
    var width = window.screen.width;
    var togglebtn = document.getElementsByClassName('offcanvas-toogle')
    var inlist = document.getElementsByClassName('incanvas')
    if(width < 600){
      
      for (i = 0; i < inlist.length; i++) {
        inlist[i].classList = "offcanvas"
      }
      var inOlist = document.getElementsByClassName('incanvasObject')
      console.log(inOlist)
      inOlist[0].classList = "center"
    } 
    else {
    console.log(inlist)
    if(inlist.length != 0){
      togglebtn[0].innerHTML = ""
    }
  }
}


//Code block transformer
function codeBlockClear(){
  var codeCollection = document.getElementsByClassName('code')

  for( i = 0; i < codeCollection.length; i++){
    var code = codeCollection[i].value
    var codeList = code.split("\n")
    code = ""
    for ( j = 0; j < codeList.length; j++){
      codeList[j] = codeList[j].trim()
      code = code+codeList[j]+"\n"
    }
    codeCollection[i].value = code.trim()
  }
}



codeBlockClear()
incanvas()