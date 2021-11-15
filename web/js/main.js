document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 5;
  let delta = 5;

  if(wrapper.className.indexOf('skewed') != 1){
    skew = 1000;
  }
  
  wrapper.addEventListener('', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left { = e.clientX + delta + 'px';
    

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});