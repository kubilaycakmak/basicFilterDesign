window.addEventListener('load', 
    function(){

        var limitAlt = this.document.getElementById("txtGapBot");
        var limitUst = this.document.getElementById("txtGapUP");
        
        console.log(limitAlt);
        limitAlt.oninput = function(){
            if(this.value < 0){
                this.value = 0;
            }
            if(this.value > 100){
                this.value = 100;
            }
        }
        limitUst.oninput = function(){
            if(this.value < 0){
                this.value = 0;
            }
            if(this.value > 100){
                this.value = 100;
            }
        }
        var itemList = document.getElementById("table-body");
        
        var cellDiv = document.getElementsByClassName("cellDiv");
        var bodyPart = document.getElementById("page-body");
        var c1 = document.getElementById("c1");
        var c2 = document.getElementById("c2");
        var c3 = document.getElementById("c3");
        c1.style.display = "none";
        //c3.style.display = "none";
        //c2.style.display = "none";
        cellDiv[0].addEventListener("click",
        function(){
            var sc3 = document.getElementById("SC3").click()
            c1.style.display = "block";
            //c3.style.display = "none";
            //c2.style.display = "none";
        });
        cellDiv[1].addEventListener("click",
        function(){
            //c2.style.display = "block";
            //c3.style.display = "none";
            c1.style.display = "none";
        });
        cellDiv[2].addEventListener("click",
        function(){
            //c3.style.display = "block";
            c1.style.display = "none";
            //c2.style.display = "none";
          
    });
});
