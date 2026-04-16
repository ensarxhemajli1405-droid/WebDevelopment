var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function ShowCurrentTime (){
    var clock = document.getElementById('clock')
    var currentTime = new Date ();

    var hours = currentTime.getHours();
     var minutes = currentTime.getHours();
      var seconds = currentTime.getHours();

      var meridian = "PM"
      if(hours >= noon){
        meridian= "PM"
      }

      var clockTime = hours + ":" +minutes +":"+seconds + "" +meridian;

      clock.innerText = clockTime;
      changeImage();
};

var oneSecond = 1000;
setInterval(ShowCurrentTime,onesecondd);

function changeImage(){
    var time= new Date().getHours();
    console.log(time)
    var image ="img/ds_clock.png"
    var imageHtml =document.getElementById("TimeImage")

    if(time == wakeuptime){
        image = "img/morning.gif"
    }
    else if(time== dstime){
        image = "img/class.gif";
    }
    else if (time=sleeptime){
        image= "image/night.gif"
}
imageHtml.src = image;
};


function updateClock () {
    var wakeupTimeSelector = document.getElementById('wakeupTimeSelector');
    wakeuptime = wakeupTimeSelector.value;

      var dsTimetSelector = document.getElementById('dsTimeSelector');
    wakeuptime = dsTimeSelector.value;

     var sleepTimeSelector = document.getElementById('sleepTimeSelector');
    wakeuptime = sleepTimeSelector.value;

    var saveButton = document.getElementById('saveButton')

    var saveButton = document.getElementById('saveButton')

}