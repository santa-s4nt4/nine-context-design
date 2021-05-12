window.addEventListener( "scroll" ,function(){
  let scroll = window.pageYOffset;
  
  if( scroll > 8000 ){ 
      document.body.style.backgroundColor = '#000000';
  } else if (scroll > 7000) {
    document.body.style.backgroundColor = '#000D18';
  } else if (scroll > 6000) {
    document.body.style.backgroundColor = '#02111D';
  } else if (scroll > 5000) {
    document.body.style.backgroundColor = '#03192B';
  } else if (scroll > 4000) {
    document.body.style.backgroundColor = '#BF3317';
  } else if( scroll > 3000 ) {
    document.body.style.backgroundColor = '#FFA468';
  } else if( scroll > 2000 ) {
    document.body.style.backgroundColor = '#006BFF';
  } else if( scroll > 1000 ) {
      document.body.style.backgroundColor = '#008DFF';
  } else {
    document.body.style.backgroundColor = '#BEDDFF';
  }
  
});