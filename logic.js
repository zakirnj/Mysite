/*-------------------hiding the slide bar -----------*/

var z = document.querySelector('i');

const slideBar = document.querySelector('.slide-bar');

const navBar = document.querySelector('.mini-nav-bar');


z.addEventListener('click', function(e){

        
        slideBar.classList.toggle('slide-bar-hidden');
       // navBar.classList.toggle('.mini-nav-bar-visible');
    

});

/*-----------------slide show code-------------------------*/

var images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
console.log(prev);
var lmt = images.length;

var i = 2;



next.addEventListener('click',function(){

    if(i > lmt-1)
    {
        i = 0;
    }
    document.getElementById('1').src = images[i];
    console.log("value of i inside the next listner  is "+ i);
    i++;
    
});

prev.addEventListener('click',function(){
    if(i < 0)
    {
        i=lmt-1;
    }
    document.getElementById('1').src = images[i];
    console.log("value of i inside the prev listner  is "+ i);
    i--;
});



/*----------------------------------------------------------------*/



var photo = document.querySelector('.slide-bar div img');
console.log(photo);

photo.addEventListener('click', function(){

    photo.classList.toggle('lightboxx');
    console.log("excuted sucessfully");

});


/*let next = document.querySelector('.next');
console.log(next);


next.addEventListener('click',function(e){

    document.querySelector('.next').innerHTML =" modified";
})


z.addEventListener('click', function(e){

    navBar.classList.toggle('mini-nav-bar-visible');
});

*/
