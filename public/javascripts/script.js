function chaluband() {
    document.querySelectorAll("#third .form")
        .forEach(function (elem) {
            elem.style.display = "none";
        })
}

document.querySelector("#child2 #second #fileicon")
    .addEventListener("click",
    
    function () {
        chaluband();
        document.querySelector("#form1").style.display = "initial";
        }
    )


document.querySelector("#child2 #second #foldericon")
    .addEventListener("click",
        function () {
            chaluband();
            document.querySelector("#form2").style.display = "initial";
        }
    )


window.addEventListener("keydown", function (dets) {
    if (dets.keyCode === 27) {
        chaluband();
        document.querySelectorAll("#formdiv .form")
            .forEach(function (e) {
                e.value = "";
            })
    }
})

var flag;
flag = 0;
document.querySelector("#second #consister").addEventListener("click",function(){
    if(flag==0){
        gsap.to("#second #consister",{
            rotate : "-90deg",
            ease:Expo.easeInOut,
            
        })
        document.querySelector("#samplefiles").style.display = "none";
        flag = 1;
        }else if(flag == 1){
        gsap.to("#second #consister",{
            rotate : "0deg",
            ease:Expo.easeInOut,
        })
        document.querySelector("#samplefiles").style.display = "initial";
        flag = 0;

    }

    
})
document.querySelector("#second #files").forEach(function(f){
    f.style.display="none"
})








