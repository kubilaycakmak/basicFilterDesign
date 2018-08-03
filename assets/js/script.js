$(function() {
    var count=0;
    var l4 = document.getElementById("l4"); // hepsi...
    /* ---------- ARAMA BUTONU ----------*/
    $("#submit-button").click(function() {
        if(count != 0){
            clearTable();
        }
        count++;
        $("#table-body").css("display", "block");
        var kapasiteTip = $("#kapasiteTip option:selected").text();
        var oldCapacity = $("#kapasite").val();
        var kapasite = oldCapacity;
        if(kapasiteTip == "kWatt") {
            kapasite = oldCapacity * 1000;
        }
        else if (kapasiteTip == "kcal/h") {
            kapasite = oldCapacity * 0.001163;
        }
        else if (kapasiteTip == "btu/h") {
            kapasite = oldCapacity * 0.29307107;
        }
        console.log(parseInt(kapasite));
        
        var lowerB = parseInt(kapasite) - (parseInt(kapasite) * parseInt($("#lowB").val()) / 100);
        var upperB = parseInt(kapasite) + (parseInt(kapasite) * parseInt($("#upB").val()) / 100);
        var l4 = $("[name='lm4mm']:checked").val();
        var l6 = $("[name='lm6mm']:checked").val();
        var l8 = $("[name='lm8mm']:checked").val();
        var l10 = $("[name='lm10mm']:checked").val();
        var l12 = $("[name='lm12mm']:checked").val();
        var f250 = $("[name='f250mm']:checked").val();
        var f300 = $("[name='f300mm']:checked").val();
        var f350 = $("[name='f350mm']:checked").val();
        var f400 = $("[name='f400mm']:checked").val();
        var f450 = $("[name='f450mm']:checked").val();
        var f500 = $("[name='f500mm']:checked").val();
        var scVal = $(".sc-active").val();
        
        switch(scVal) { // SC Değerini bulduğumuzda işleyeceğiz.,
            case "SC1":
                sc1Func(lowerB, upperB, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500);
                break;
            case "SC2":
                sc2Func(lowerB, upperB, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500);
            break;
            case "SC3":
                sc3Func(lowerB, upperB, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500);
            break;
            case "SC4":
                sc4Func(lowerB, upperB, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500);
            break;
        }
    });
  
  
    //#region buttonClick
    $("#SC1").click(function() {
        $("#lm4mm").prop("checked", true);  
        $("#lm6mm").prop("checked", true);
        $("#lm8mm").prop("checked", false);
        $("#lm10mm").prop("checked", false);
        $("#lm12mm").prop("checked", false);
        $("#lmHepsi").prop("checked", false);
        $(this).addClass( "sc-active" );
        $("#SC2").removeClass( "sc-active" );
        $("#SC3").removeClass( "sc-active" );
        $("#SC4").removeClass( "sc-active" );
        $('input[name=evaporasyon]').val('0');
        $('input[name=deltat]').val('10');
        $('input[name=sicaklik]').val('10');
        $(this).css("background-color","green");
        $("#SC2").css("background-color","#0e5576");
        $("#SC3").css("background-color","#0e5576");
        $("#SC4").css("background-color","#0e5576");
    });
    $("#SC2").click(function() {
        $("#lm6mm").prop("checked", true);
        $("#lm8mm").prop("checked", true);
        $("#lm4mm").prop("checked", false);
        $("#lm10mm").prop("checked", false);
        $("#lm12mm").prop("checked", false); 
        $("#lmHepsi").prop("checked", false);
        $(this).addClass( "sc-active" );
        $("#SC1").removeClass( "sc-active" );
        $("#SC3").removeClass( "sc-active" );
        $("#SC4").removeClass( "sc-active" );
        $('input[name=evaporasyon]').val('-8');
        $('input[name=deltat]').val('8');
        $('input[name=sicaklik]').val('0');
        $(this).css("background-color","green");
        $("#SC1").css("background-color","#0e5576");
        $("#SC3").css("background-color","#0e5576");
        $("#SC4").css("background-color","#0e5576");
    });
    $("#SC3").click(function() {
        $("#lm8mm").prop("checked", true);
        $("#lm10mm").prop("checked", true);
        $("#lm4mm").prop("checked", false);
        $("#lm6mm").prop("checked", false);
        $("#lm12mm").prop("checked", false); 
        $("#lmHepsi").prop("checked", false); 
        $(this).addClass( "sc-active" );
        $("#SC2").removeClass( "sc-active" );
        $("#SC1").removeClass( "sc-active" );
        $("#SC4").removeClass( "sc-active" );
        $('input[name=evaporasyon]').val('-25');
        $('input[name=deltat]').val('-6');
        $('input[name=sicaklik]').val('-18');
        $(this).css("background-color","green");
        $("#SC2").css("background-color","#0e5576");
        $("#SC1").css("background-color","#0e5576");
        $("#SC4").css("background-color","#0e5576");
    });
    $("#SC4").click(function() {
        $("#lm10mm").prop("checked", true);
        $("#lm12mm").prop("checked", true);
        $("#lm8mm").prop("checked", false);
        $("#lm4mm").prop("checked", false);
        $("#lm6mm").prop("checked", false); 
        $("#lmHepsi").prop("checked", false); 
        $(this).addClass( "sc-active" );
        $("#SC2").removeClass( "sc-active" );
        $("#SC3").removeClass( "sc-active" );
        $("#SC1").removeClass( "sc-active" );
        $('input[name=evaporasyon]').val('-31');
        $('input[name=deltat]').val('-6');
        $('input[name=sicaklik]').val('-25');
        $(this).css("background-color","green");
        $("#SC2").css("background-color","#0e5576");
        $("#SC3").css("background-color","#0e5576");
        $("#SC1").css("background-color","#0e5576");
    });
    $("#lmHepsi").click(function(){
        if(this.checked) {
            $("#lm4mm").prop("checked", true);  
            $("#lm6mm").prop("checked", true);
            $("#lm8mm").prop("checked", true);
            $("#lm10mm").prop("checked", true);
            $("#lm12mm").prop("checked", true);
        } else {
            $("#lm4mm").prop("checked", false);  
            $("#lm6mm").prop("checked", false);
            $("#lm8mm").prop("checked", false);
            $("#lm10mm").prop("checked", false);
            $("#lm12mm").prop("checked", false);
        }
    });
    $("#fHepsi").click(function(){
        if(this.checked) {
            $("#f200mm").prop("checked", true);  
            $("#f250mm").prop("checked", true);
            $("#f300mm").prop("checked", true);
            $("#f350mm").prop("checked", true);
            $("#f400mm").prop("checked", true);
            $("#f450mm").prop("checked", true);
            $("#f500mm").prop("checked", true);
            $("#f630mm").prop("checked", true);
            $("#f800mm").prop("checked", true);
        } else {
            $("#f200mm").prop("checked", false);  
            $("#f250mm").prop("checked", false);
            $("#f300mm").prop("checked", false);
            $("#f350mm").prop("checked", false);
            $("#f400mm").prop("checked", false);
            $("#f450mm").prop("checked", false);
            $("#f500mm").prop("checked", false);
            $("#f630mm").prop("checked", false);
            $("#f800mm").prop("checked", false);
        }
    });
    $("#lmHepsi2").click(function(){
        if(this.checked) {
            $("#lm4mm2").prop("checked", true);  
            $("#lm6mm2").prop("checked", true);
            $("#lm8mm2").prop("checked", true);
            $("#lm10mm2").prop("checked", true);
            $("#lm12mm2").prop("checked", true);
        } else {
            $("#lm4mm2").prop("checked", false);  
            $("#lm6mm2").prop("checked", false);
            $("#lm8mm2").prop("checked", false);
            $("#lm10mm2").prop("checked", false);
            $("#lm12mm2").prop("checked", false);
        }
    });
    $("#fHepsi2").click(function(){
        if(this.checked) {
            $("#f200mm2").prop("checked", true);  
            $("#f250mm2").prop("checked", true);
            $("#f300mm2").prop("checked", true);
            $("#f350mm2").prop("checked", true);
            $("#f400mm2").prop("checked", true);
            $("#f450mm2").prop("checked", true);
            $("#f500mm2").prop("checked", true);
            $("#f630mm2").prop("checked", true);
            $("#f800mm2").prop("checked", true);
        } else {
            $("#f200mm2").prop("checked", false);  
            $("#f250mm2").prop("checked", false);
            $("#f300mm2").prop("checked", false);
            $("#f350mm2").prop("checked", false);
            $("#f400mm2").prop("checked", false);
            $("#f450mm2").prop("checked", false);
            $("#f500mm2").prop("checked", false);
            $("#f630mm2").prop("checked", false);
            $("#f800mm2").prop("checked", false);
        }
    });
    //#endregion
});

//#region data
function crtOb(model, serialNo, sc1, sc2, sc3, sc4, lamel, diameter, quantity, power, totalSurface, inlet, outlet, l, h, a, coilBatterieE1W,
    coilBatterieE2W, drainTray, price, expl) {
this.model=model;       this.serialNo=serialNo;  this.sc1=sc1;     this.sc2=sc2;     this.sc3=sc3;     this.sc4=sc4;       this.lamel=lamel;
this.diameter=diameter; this.quantity=quantity;  this.power=power; this.totalSurface=totalSurface;     this.inlet=inlet;   this.outlet=outlet;
this.l=l; this.h=h; this.a=a; this.coilBatterieE1W=coilBatterieE1W; this.coilBatterieE2W=coilBatterieE2W; this.drainTray=drainTray;
this.price=price; this.expl=expl;
}

var data=[];
data[0]=new crtOb("KHD4-35.301", "400400663001-38", 4100, 3157, null, null, "4mm", 300, 1, "36", "12,4","1/2", "5/8", "700", "250", "850", "4X400", "*", "*", "300", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[1]=new crtOb("KHD4-75.302", "400840663002-38", 8774, 6755, null, null, "4mm", 300, 2, "72", "26,12","1/2", "3/4", "1140", "250", "850", "4X800", "*", "*", "546", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[2]=new crtOb("KHD4-115.303", "401280663003-38", 13386, 10307, null, null, "4mm", 300, 3, "108", "39,62", "1/2", "7/8", "1580", "250", "850", "4X1200", "*", "*", "827", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[3]=new crtOb("KHD4-154.304", "401720663004-38", 18006, 13864, null, null, "4mm", 300, 4, "144", "53,2", "1/2", "7/8", "2020","250", "850", "4X1650", "*", "*", "1111", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[4]=new crtOb("KHD4-45.351", "400500663501-38", 5321, 4097, null, null, "4mm", 350, 1, "92", "15.38", "1/2", "3/4", "800", "250", "850", "4X450", "*", "*", "351", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[5]=new crtOb("KHD4-95.352", "401040663502-38", 11058, 8514, null, null, "4mm", 350, 2, "184", "31,96","1/2", "7/8", "1340", "250", "850", "4X1000", "*","*", "597", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[6]=new crtOb("KHD4-140.353", "401580663503-38", 16794, 12931, null, null, "4mm", 350, 3, "276", "48,54", "5/8", "11/8", "1880", "250", "850", "4X1500", "*", "*", "908","4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[7]=new crtOb("KHD4-200.354", "402120663504-38", 23701, 18249, null, null, "4mm", 350, 4, "368", "65,12", "7/8", "13,8", "2420", "250", "850", "4X2000", "*", "*","1218", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[8]=new crtOb("KHD4-83.401", "400650864001-38", 9695, 7465, null, null, "4mm", 400, 1, "120", "27,7", "1/2", "7/8", "950", "315", "1100", "4X600", "*", "*", "567", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[9]=new crtOb("KHD4-171.402", "401340864002-38", 19985, 15388, null, null, "4mm", 400, 2, "240", "54,1", "1/2", "11/8", "1640", "315", "1100", "4X1250", "*","*", "942", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[10]=new crtOb("KHD4-260.403", "402030864003-38", 30275, 23311, null, null, "4mm", 400, 3, "360", "86,5", "7/8", "13/8", "2330", "315", "1100", "4X1950", "*","*","1427", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[11]=new crtOb("KHD4-105.451",	"400650884501-38", 12283, 9457, null, null, "4mm", 450, 1, "165", "34,6", "1/2", "7/8", "950", "380", "1100", "4X600", "*","*", "635","4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[12]=new crtOb("KHD4-220.452", "401340884502-38", 25311, 19489, null, null, "4mm", 450, 2, "330", "71,3", "1/2", "11/8", "1640", "380", "1100", "4X1250", "*","*","1058", "4mm Tavan Tipi Çift Üflemeli Soğutucu");
data[13]=new crtOb("KHD4-330.453", "402030884503-38", 38340, 29521, null, null, "4mm", 450, 3, "495", "108", "7/8", "13/8", "2330", "380", "1100", "4X1950", "*", "*", "1604","4mm Tavan Tipi Çift Üflemeli Soğutucu");

data[14]=new crtOb("KHD6-25.301", "600400663001-38", 3690, 2841, null, null, "6mm", 300, 1, "36", "8,3","1/2", "5/8","700", "250", "850", "4X400", "6X400", "2X400", "340","6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[15]=new crtOb("KHD6-55.302", "600840663002-38", 7896, 6079, null, null, "6mm", 300, 2, "72", "17,5","1/2","3/4", "1140", "250","850", "4X800", "6X800", "2X800", "600", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[16]=new crtOb("KHD6-80.303", "601280663003-38", 12047, 9276, null, null, "6mm", 300,3, "108","26,54", "1/2", "7/8", "1580", "250", "850", "4X1200", "6X1200", "2X1200", "910","6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[17]=new crtOb("KHD6-110.304", "601720663004-38", 16205, 12478, null, null, "6mm", 300, 4, "144", "35,64", "1/2", "7/8", "2020", "250", "850", "4X1650", "6X1650", "2X1650", "1225", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[18]=new crtOb("KHD6-30.351", "600500663501-38", 4788, 3686, null, null, "6mm", 350, 1, "92", "10,3", "1/2", "3/4", "800", "250", "850", "4X450", "6X450", "2X450", "386", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[19]=new crtOb("KHD6-65.352", "601040663502-38", 9952, 7663, null, null, "6mm", 350, 2, "184", "21,41", "1/2", "7/8", "1340", "250", "850", "4X1000", "6X1000", "2X1000", "658", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[20]=new crtOb("KHD6-100.353", "601580663503-38", 15114, 11637, null, null, "6mm", 350, 3, "276", "32,52", "5/8", "11/8", "1880", "250", "850", "4X1500", "6X1500", "2X1500", "999", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[21]=new crtOb("KHD6-140.354", "602120663504-38", 21330, 16424, null, null, "6mm", 350, 4, "368", "43,63", "7/8", "13/8", "2420", "250", "850", "4X2000", "6X2000", "2X2000", "1339", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[22]=new crtOb("KHD6-58.401", "600650864001-38", 8725, 6718, null, null, "6mm", 400, 1, "120", "18,55", "1/2", "7/8", "950", "315", "1100","4X600", "6X600", "2X600", "624", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[23]=new crtOb("KHD6-120.402", "601340864002-38", 17986, 13849, null, null, "6mm", 400, 2, "240", "38,25", "1/2", "11/8", "1640", "315", "1100", "4X1250", "6X1250", "2X1250", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[24]=new crtOb("KHD6-180.403", "602030864003-38", 27247, 20980, null, null, "6mm", 400, 3 , "360", "57,95", "7/8", "13/8", "2330", "315", "1100","4X1950", "6X1950", "2X1950", "1570", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[25]=new crtOb("KHD6-73.451", "600650884501-38", 11054, 8511, null, null, "6mm", 450, 1, "165", "23,18", "1/2", "7/8", "950", "380", "1100", "4X600", "6X600", "2X600","699","6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[26]=new crtOb("KHD6-150.452", "601340884502-38", 22779, 17539, null,null, "6mm", 450, 2, "330", "47,77", "1/2", "11/8", "1640", "380", "1100", "4X1250", "6X1250", "2X1250","1164", "6mm Tavan Tipi Çift Üflemeli Soğutucu");
data[27]=new crtOb("KHD6-230.453", "602030884503-38", 34506, 26569, null, null, "6mm", 450, 3, "495", "72,36", "7/8", "13/8", "2330", "380", "1100", "4X1950", "6X1950", "2X1950","1763","6mm Tavan Tipi Çift Üflemeli Soğutucu");

data[28]=new crtOb("KRP6-24.301", "600390733001", 3476, 2780, null, null, "6mm", 300, 1 , "1X73", "10", "1/2","16", "640", "424", "330", null, null, null, "233", "6mm Standart Oda Soğutucu");
data[29]=new crtOb("KRP6-28.351", "600450833501", 4170, 3336, null, null, "6mm", 350, 1, "1X130", "11", "1/2", "16", "700", "480", "330", null, null, null, "255", "6mm Standart Oda Soğutucu");
data[30]=new crtOb("KRP6-30.351", "600450843501", 4474, 3579, null, null, "6mm", 350, 1, "1X130", "12,9", "1/2", "22", "700", "480", "330", null, null, null, "294","6mm Standart Oda Soğutucu");
data[31]=new crtOb("KRP6-40.401", "600530944001", 5891, 4712, null, null, "6mm", 400, 1, "1X160", "17,2", "1/2", "22", "780", "536", "330", null, null, null,  "395", "6mm Standart Oda Soğutucu");
data[32]=new crtOb("KRP6-47.451", "605801044501", 7065, 5440, null, null, "6mm", 450, 1, "1X245", "20,8", "1/2", "28", "830", "592", "330", null, null, null, "439", "6mm Standart Oda Soğutucu");
data[33]=new crtOb("KRP6-67.501", "606301245001", 10117, 7790, null, null, "6mm", 500, 1, "1X830", "27,4", "1/2", "28", "880", "704", "440", null, null, null, "579", "6mm Standart Oda Soğutucu");
data[34]=new crtOb("KRP6-35.302", "600780733002", 5233, 4186, null, null, "6mm",300, 2, "2X73", "14,8", "1/2", "22", "1030", "424", "330", null, null, null, "352", "6mm Standart Oda Soğutucu");
data[35]=new crtOb("KRP6-44.352", "600900833502", 6356, 5084, null, null, "6mm", 350, 2, "2X130", "19,4", "1/2", "28", "1150", "424", "330", null, null, null, "409", "6mm Standart Oda Soğutucu");
data[36]=new crtOb("KRP6-50.352", "600900843502", 7326, 5860, null, null, "6mm", 350, 2, "2X130", "22,9", "1/2", "28", "1150", "424", "330", null, null, null, "481", "6mm Standart Oda Soğutucu");
data[37]=new crtOb("KRP6-57.402", "601050934002", 8580, 6606, null, null, "6mm", 400, 2, "2X160", "25,5", "1/2", "28", "1300", "536", "330", null, null, null, "501", "6mm Standart Oda Soğutucu");
data[38]=new crtOb("KRP6-72.402", "601050944002", 10791, 8309, null, null, "6mm", 400, 2, "2X160", "33", "16", "28", "1300", "536", "330", null, null, null, "635", "6mm Standart Oda Soğutucu");
data[39]=new crtOb("KRP6-86.452", "601150104452", 12957, 9976, null, null, "6mm", 450, 2, "2X245", "41,3", "16", "35", "1400", "592", "330", null, null, null, "719", "6mm Standart Oda Soğutucu");
data[40]=new crtOb("KRP6-125.502", "601250124502", 19278, 14844, null, null, "6mm", 500, 2, "2X830", "54,4", "16", "35", "1500", "704", "440", null, null, null, "947", "6mm Standart Oda Soğutucu");
data[41]=new crtOb("KRP6-95.353", "601350843503", 13740, 10992, null, null, "6mm", 350, 3, "3X130", "38,7", "16", "28", "1600", "480", "330", null, null, null, "746", "6mm Standart Oda Soğutucu");
data[42]=new crtOb("KRP6-115.403", "601570944003", 16921, 13029, null, null, "6mm", 400, 3, "3X160", "50,7", "16", "28", "1820", "536", "380", null, null, null, "883", "6mm Standart Oda Soğutucu");
data[43]=new crtOb("KRP6-145.453", "601720104453", 22089, 17008, null, null, "6mm", 450, 3, "3X245", "61,5", "22", "35", "1970", "592", "380", null, null, null, "1073", "6mm Standart Oda Soğutucu");
data[44]=new crtOb("KRP6-210.453", "601720106453", 33133, 25512,  null, null, "6mm", 450, 3, "3X245", "93,4", "22", "35", "1970", "592", "440", null, null, null, "1629", "6mm Standart Oda Soğutucu");
data[45]=new crtOb("KRP6-175.503", "601870126503", 26334, 20277, null, null, "6mm", 500, 3, "3X830", "81,3", "22", "35", "2120", "704", "440", null, null, null, "1418", "6mm Standart Oda Soğutucu");
data[46]=new crtOb("KRP6-150.404", "602090944003", 22875, 17613, null, null, "6mm", 400, 4, "4X160", "67,5", "22", "42", "2340", "536", "380", null, null, null, "1177", "6mm Standart Oda Soğutucu");
data[47]=new crtOb("KRP6-180.454", "602290104454", 27214, 20954, null, null, "6mm", 450, 4, "4X245", "82,1", "22", "42", "2540", "592", "380", null, null, null, "1432", "6mm Standart Oda Soğutucu");
data[48]=new crtOb("KRP6-265.504", "602380124504", 40123, 30894, null, null, "6mm", 500, 4, "4X830", "103,4", "22", "42", "2630", "704", "440", null, null, null, "1686", "6mm Standart Oda Soğutucu");
data[49]=new crtOb("KRP6-400.504", "602380126504", 60184, 46341, null, null, "6mm", 500, 4, "4X830", "155,1", "22", "42", "2630", "704", "440", null, null, null, "2241", "6mm Standart Oda Soğutucu");

data[50]=new crtOb("KHD8-22.301", "800400663001-12", null, 2556, 1968, null, "8mm", 300, 1, "36", "6,22", "1/2", "5/8", "700", "250", "850", "4X400", "6X400", "2X400", "374", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[51]=new crtOb("KHD8-47.302", "800840663002-12", null, 5471, 4213, null, "8mm", 300, 2, "72", "13,12", "1/2", "3/4", "1140", "250", "850", "4X800", "6X800", "2X800", "660", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[52]=new crtOb("KHD8-72.303", "801280663003-12", null, 8348, 6428, null, "8mm", 300, 3, "108", "19,9", "1/2", "7/8", "1580", "250", "850", "4X1200", "6X1200", "2X1200", "1001", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[53]=new crtOb("KHD8-97.304", "801720663004-12", null, 11230, 8647, null, "8mm", 300, 4, "144", "26,73", "1/2", "7/8", "2020" ,"250" ,"850", "4X1650", "6X1650", "2X1650", "1348", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[54]=new crtOb("KHD8-27.351", "800500663501-12", null, 3317, 2554, null, "8mm", 350, 1, "92", "7,72", "1/2", "3/4", "800", "250", "850", "4X450", "6X450", "2X450", "425", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[55]=new crtOb("KHD8-59.352", "801040663502-12", null, 6896, 5310, null, "8mm", 350, 2, "184", "16,05", "1/2", "7/8", "1340", "250", "850", "4X1000", "6X1000", "2X1000", "724", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[56]=new crtOb("KHD8-90.353", "801580663503-12", null, 110473, 8064, null, "8mm", 350, 3, "276", "24,4", "5/8", "11/8", "1880", "250", "850", "4X1500", "6X1500", "2X1500", "1098", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[57]=new crtOb("KHD8-127.354", "802120663504-12", null, 14781, 11381, null, "8mm", 350, 4, "368", "32,72", "7/8" ,"13/8", "2420", "250", "850", "4X2000", "6X2000", "2X2000", "1474", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[58]=new crtOb("KHD8-52.401", "800650864001-12", null, 6046, 4655, null, "8mm", 400, 1, "120", "13,91", "1/2", "7/8", "950", "315", "1100", "4X600", "6X600", "2X600", "686", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[59]=new crtOb("KHD8-107.402", "801340864002-12", null, 12464, 9597, null, "8mm", 400, 2, "240", "28,68", "1/2", "11/8" ,"1640", "315", "1100", "4X1250", "6X1250", "2X1250", "1140", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[60]=new crtOb("KHD8-160.403", "802030864003-12", null, 18882, 14539, null, "8mm", 400, 3, "360", "43,46", "7/8", "13/8", "2330", "315", "1100", "4X1950", "6X1950", "2X1950", "1727", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[61]=new crtOb("KHD8-65.451", "800650864501-12", null, 7659, 5898, null, "8mm", 450, 1, "165", "17,38"," 1/2", "7/8", "950", "380", "1100", "4X600", "6X600", "2X600", "768", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[62]=new crtOb("KHD8-135.452", "801340864502-12", null, 15785, 12154, null, "8mm", 450, 2, "330", "35,82", "1/2", "11/8", "1640", "380", "1100", "4X1250", "6X1250", "2X1250", "1282", "8mm Tavan Tipi Çift Üflemeli Soğutucu");
data[63]=new crtOb("KHD8-205.453", "802030864503-12", null, 23912, 18412, null, "8mm", 450, 3, "495", "54,27", "7/8", "13/8", "2330", "380", "1100", "4X1950", "6X1950", "2X1950", "1942", "8mm Tavan Tipi Çift Üflemeli Soğutucu");

data[64]=new crtOb("KRP8-22.351", "800450843501", null, 3221, 2480, null, "8mm", 350, 1, "1X130", "9,7", "1/2", "22", "700", "480", "330", null, null, null, "323", "8mm Standart Oda Soğutucu");
data[65]=new crtOb("KRP8-28.401", "800530944001", null, 4240, 3264, null, "8mm", 400, 1, "1X160", "12,9", "1/2", "22", "780", "536", "330", null, null, null, "433", "8mm Standart Oda Soğutucu");
data[66]=new crtOb("KRP8-33.451", "805801044501", null, 4896, 3769, null, "8mm", 450, 1, "1X245", "15,6", "1/2", "28", "830", "592", "330", null, null, null, "483", "8mm Standart Oda Soğutucu");
data[67]=new crtOb("KRP8-47.501", "806301245001", null, 7011, 5398, null, "8mm", 500, 1, "1X830", "20,5", "1/2", "28", "880", "704", "440", null, null, null, "636", "8mm Standart Oda Soğutucu");
data[68]=new crtOb("KRP8-35.352", "800900843502", null, 5274, 4060, null, "8mm", 350, 2, "2X130", "17,2", "1/2", "28", "1150", "424", "330", null, null, null, "529", "8mm Standart Oda Soğutucu");
data[69]=new crtOb("KRP8-50.402", "801050944002", null, 7478, 5758, null, "8mm", 400, 2, "2X160", "24,8", "16", "28", "1300", "536", "330", null, null, null, "697", "8mm Standart Oda Soğutucu");
data[70]=new crtOb("KRP8-60.452", "801150104452", null, 8978, 6913, null, "8mm", 450, 2, "2X245", "31", "16", "35", "1400", "592", "330", null, null, null, "791", "8mm Standart Oda Soğutucu");
data[71]=new crtOb("KRP8-88.502", "801250124502", null, 13359, 10286, null, "8mm", 500, 2, "2X830", "40,8", "16", "35", "1500", "704", "440", null, null, null, "1041", "8mm Standart Oda Soğutucu");
data[72]=new crtOb("KRP8-65.353", "801350843503", null, 9892, 7616, null, "8mm", 350, 3, "3X130", "29,2", "16", "28", "1600", "480", "330", null, null, null, "818", "8mm Standart Oda Soğutucu");
data[73]=new crtOb("KRP8-78.403", "801570944003", null, 11726, 9029, null, "8mm", 400, 3, "3X160", "38,1", "16", "35", "1820", "536", "380", null, null, null, "971", "8mm Standart Oda Soğutucu");
data[74]=new crtOb("KRP8-101.453", "801720104453", null, 15307, 11786, null, "8mm", 450, 3, "3X245", "46,2", "22", "35", "1970", "592", "380", null, null, null, "1179", "8mm Standart Oda Soğutucu");
data[75]=new crtOb("KRP8-150.453", "801720106453", null, 22960, 17679, null, "8mm", 450, 3, "3X245", "70,1", "22", "35", "1970", "592", "440", null, null, null, "1791", "8mm Standart Oda Soğutucu");
data[76]=new crtOb("KRP8-120.503", "801870124503", null, 18249, 14051, null, "8mm", 500, 3, "3X830", "61", "22", "35", "2120", "704", "440", null, null, null, "1559", "8mm Standart Oda Soğutucu");
data[77]=new crtOb("KRP8-105.404", "802090944003", null, 15851, 12205, null, "8mm", 400, 4, "4X160", "50,6", "22", "42", "2340", "536", "380", null, null, null, "1295", "8mm Standart Oda Soğutucu");
data[78]=new crtOb("KRP8-125.454", "802290104454", null, 18858, 14520, null, "8mm", 450, 4, "4X245", "61,5", "22", "42", "2540", "592", "380", null, null, null, "1575", "8mm Standart Oda Soğutucu");
data[79]=new crtOb("KRP8-185.504", "802380124504", null, 27804, 21409, null, "8mm", 500, 4, "4X830", "77,5", "22", "42", "2630", "704", "440", null, null, null, "1928", "8mm Standart Oda Soğutucu");
data[80]=new crtOb("KRP8-276.504", "802380126504", null, 41706, 32113, null, "8mm", 500, 4, "4X830", "116,3", "22", "42", "2630", "704", "440", null, null, null, "2902", "8mm Standart Oda Soğutucu");

data[81]=new crtOb("KRP10-20.401", "100530944001", null, null, 2937, 2261, "10mm", 400, 1, "1X160", "10,3", "1/2", "22", "780", "536", "330", null, null, null, "475", "10mm Standart Oda Soğutucu");
data[82]=new crtOb("KRP10-23.451", "105801044501", null, null, 3392, 2611, "10mm", 450, 1, "1X245", "12,5", "1/2", "28", "830", "592", "330", null, null, null, "530", "10mm Standart Oda Soğutucu");
data[83]=new crtOb("KRP10-35.451", "105801064501", null, null, 5088, 3916, "10mm", 450, 1, "1X245", "18,9", "1/2", "28", "830", "592", "440", null, null, null, "795", "10mm Standart Oda Soğutucu");
data[84]=new crtOb("KRP10-32.501", "106301245001", null, null, 4858, 3740, "10mm", 500, 1, "1X830", "16,4", "1/2", "28", "880", "704", "380", null, null, null, "697", "10mm Standart Oda Soğutucu");
data[85]=new crtOb("KRP10-48.501", "106301265001", null, null, 7287, 5610, "10mm", 500, 1, "1X830", "24,6", "1/2", "28", "880", "404", "440", null, null, null, "1047","10mm Standart Oda Soğutucu");
data[86]=new crtOb("KRP10-34.402", "101050944002", null, null, 5182, 3990, "10mm", 400, 2, "2X160", "19,8", "16", "28", "1300", "536", "330", null, null, null, "768", "10mm Standart Oda Soğutucu");
data[87]=new crtOb("KRP10-42.452", "101150104452", null, null, 6221, 4790, "10mm", 450, 2, "2X245", "24,8", "16", "35", "1400", "592", "330", null, null, null, "870", "10mm Standart Oda Soğutucu");
data[88]=new crtOb("KRP10-63.452", "101150106452", null, null, 9331, 7185, "10mm", 450, 2, "2X245", "37,2", "16", "35", "1400", "592", "440", null, null, null, "1306", "10mm Standart Oda Soğutucu");
data[89]=new crtOb("KRP10-62.502", "101250124502", null, null, 9257, 7127, "10mm", 500, 2, "2X830", "32,6", "16", "35", "1500", "704", "380", null, null, null, "1144", "10mm Standart Oda Soğutucu");
data[90]=new crtOb("KRP10-92.502", "101250126502", null, null, 13885, 10690, "10mm", 500, 2, "2X830", "48,9", "16", "35", "1500", "704", "440", null, null, null, "1716", "10mm Standart Oda Soğutucu");
data[91]=new crtOb("KRP10-54.403", "101570944003", null, null, 8126, 6257, "10mm", 400, 3, "3X160", "30,5", "16", "35", "1820", "536"," 380", null, null, null, "1069", "10mm Standart Oda Soğutucu");
data[92]=new crtOb("KRP10-70.453", "101720104453", null, null, 10607, 8167, "10mm", 450, 3, "3X245", "37", "22", "35", "1970", "592", "380", null, null, null, "1297", "10mm Standart Oda Soğutucu");
data[93]=new crtOb("KRP10-105.453", "101720106453", null, null, 15911, 12251, "10mm", 450, 3, "3X245", "56,1", "22", "35", "1970", "592", "440", null, null, null, "1969", "10mm Standart Oda Soğutucu");
data[94]=new crtOb("KRP10-56.503", "101870124503", null, null, 8430, 6490, "10mm", 500, 3, "3X245", "32,3", "22", "42", "2120", "704", "380", null, null, null, "1172", "10mm Standart Oda Soğutucu");
data[95]=new crtOb("KRP10-84.503", "101870126503", null, null, 12645, 9736, "10mm", 500, 3, "3X830", "48,8", "22", "35", "2120", "704", "440", null, null, null, "1716", "10mm Standart Oda Soğutucu");
data[96]=new crtOb("KRP10-72.404", "102090944003", null, null, 10984, 8457, "10mm", 400, 4, "4X160", "40,5", "22", "35", "2340", "536", "380", null, null, null, "1423", "10mm Standart Oda Soğutucu");
data[97]=new crtOb("KRP10-87.454", "102290104454", null, null, 13068, 10062, "10mm", 450, 4, "4X245", "49,2", "22", "35", "2540", "592", "380", null, null, null, "1734", "10mm Standart Oda Soğutucu");
data[98]=new crtOb("KRP10-127.504", "102380124504", null, null, 19268, 14836, "10mm", 500, 4, "4X830", "62", "22", "42", "2630", "704", "440", null, null, null, "2122", "10mm Standart Oda Soğutucu");
data[99]=new crtOb("KRP10-190.504", "102380126504", null, null, 28901, 22253, "10mm", 500, 4, "4X830", "93,1", "22", "42", "2630", "704", "440", null, null, null, "3192", "10mm Standart Oda Soğutucu");


data[100]=new crtOb("KHA4-34.301", "400635863001-38", 3937, 3031, null, null, "4mm", 300, 1, "1X73", "13,51", "1/2", "5/8", "875", "285", "630", "1X600", null, null, "337", "4mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[101]=new crtOb("KHA4-46.351", "400635883501-38", 5433, 4183, null, null, "4mm", 350, 1, "1X130", "17,9", "1/2", "3/4", "875", "285", "685", "1X600", null, null, "447", "4mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[102]=new crtOb("KHA4-70.302", "401310863002-38", 8163, 6285, null, null, "4mm", 300, 2, "2X73", "27,87", "1/2", "3/4", "1550", "285", "630", "1X1250", null, null, "639", "4mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[103]=new crtOb("KHA4-97.352", "401310883502-38", 11264, 8673, null, null, "4mm", 350, 2, "2X130", "37,1", "1/2", "22", "1550", "285", "685", "1X1250", null, null, "850", "4mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[104]=new crtOb("KHA4-110.303", "401985863002-38", 12311, 9479, null, null, "4mm", 300, 3, "3X73", "42,24", "1/2", "22", "2225", "285", "630", "1X1900", null, null, "893", "4mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[105]=new crtOb("KHA4-145.353", "401985883502-38", 16989, 13081, null, null, "4mm", 350, 3, "3X130", "56,2", "1/2", "28", "2225", "285", "685", "1X1900", null, null, "1187", "4mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");

data[106]=new crtOb("KHA6-29.301", "600635863001-38", 3352, 2566, 1975, null, "6mm", 300, 1, "1X73", "9", "1/2", "5/8", "875", "285", "630", "1X600", "2X600", "1X600", "327", "6mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[107]=new crtOb("KHA6-40.351", "600635883501-38", 4599, 3541, 2727, null, "6mm", 350, 1, "1X130", "11,9", "1/2", "3/4", "875", "285", "685", "1X600", "2X600", "1X600", "433", "6mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[108]=new crtOb("KHA6-60.302", "601310863002-38", 7087, 5456, 4201,  null, "6mm", 300, 2, "2X73", "18,6", "1/2", "3/4", "1550", "285", "630", "1X1250", "2X1250", "1X1250", "627", "6mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[109]=new crtOb("KHA6-85.352", "601310883502-38", 9780, 7530, 5798, null, "6mm", 350, 2, "2X130", "16,5", "1/2", "22", "1550", "285", "685", "1X1250", "2X1250", "1X1250", "833", "6mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[110]=new crtOb("KHA6-92.303", "601985863002-38", 10657, 8205, 6317, null, "6mm", 300, 3, "3X73", "28,16", "1/2", "22", "2225", "285", "630", "1X1900", "2X1900", "1X1900", "875", "6mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[111]=new crtOb("KHA6-126.353", "601985883502-38", 14706, 11324, 8719, null, "6mm", 350, 3, "3X130", "37,4", "1/2", "28", "2225", "285", "685", "1X1900", "2X1900", "1X1900", "1163", "6mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");

data[112]=new crtOb("KHA8-20.301", "800635863001-38", 2821, 2181, 1672, null, "8mm", 300, 1, "1X73", "6,75", "1/2", "5/8", "875", "285", "630", "1X600", "2X600", "1X600", "320", "8mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[113]=new crtOb("KHA8-26.351", "800635883501-38", 3892, 2997, 2308, null, "8mm", 350, 1, "1X130", "8,9", "1/2", "3/4", "875", "285", "685", "1X600", "2X600", "1X600", "614", "8mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[114]=new crtOb("KHA8-42.302", "801310863002-38", 6243, 4807, 3701, null, "8mm", 300, 2, "2X73", "13,93", "1/2", "3/4", "1550", "285", "630", "1X1250", "2X1250", "1X1250", "614", "8mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[115]=new crtOb("KHA8-57.352", "801310883502-38", 8615, 6633, 5108, null, "8mm", 350, 2, "2X130", "18,5", "1/2", "22", "1550", "285", "685", "1X1250", "2X1250", "1X1250", "814", "8mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[116]=new crtOb("KHA8-62.303", "801985863002-38", 9318, 7221, 5660, null, "8mm", 300, 3, "3X73", "21,12", "1/2", "22", "2225", "285", "630", "1X1900", "2X1900", "1X1900", "856", "8mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");
data[117]=new crtOb("KHA8-85.353", "801985883502-38", 12941, 9965, 7673, null, "8mm", 350, 3, "3X130", "28,1", "1/2", "28", "2225", "285", "685"," 1X1900", "2X1900", "1X1900", "1139", "8mm Tavan Tipi Açılı Oda Soğutucu(Axiel Fanlı)");


data[118]=new crtOb("KSA4-13.251", "400340662501-38", 1960, 1508, null, null, "4mm", 250, 1, "65", "5,42", "3/8", "1/2", "540", "220", "530", "2X300", null, null, "168", "4mm Tavan Tipi Açılı Oda Soğutucu(Q Fanlı)");
data[119]=new crtOb("KSA4-28.252", "400760662502-38", 4312, 3320, null, null, "4mm", 250, 2, "130", "12,13", "1/2", "1/2", "960", "220", "530", "2X700", null, null, "309", "4mm Tavan Tipi Açılı Oda Soğutucu(Q Fanlı)");
data[120]=new crtOb("KSA4-44.253", "401160662503-38", 6644, 5116, null, null, "4mm", 250, 3, "195", "18,51", "1/2", "1/2", "1360", "220", "530", "2X1100", null, null, "419", "4mm Tavan Tipi Açılı Oda Soğutucu(Q Fanlı)");

data[121]=new crtOb("KSA6-12.251", "600340662501-38", 1764, 1358, null, null, "6mm", 250, 1, "65", "3,61", "3/8", "1/2", "540"," 220", "530", "2X300", null, null, "162", "6mm Tavan Tipi Açılı Oda Soğutucu(Q Fanlı)");
data[122]=new crtOb("KSA6-25.252", "600760662502-38", 3880, 2988, null, null, "6mm", 250, 2, "130", "8,08", "1/2", "1/2", "960", "220", "530", "2X700", null, null, "299", "6mm Tavan Tipi Açılı Oda Soğutucu(Q Fanlı)");
data[123]=new crtOb("KSA6-40.253", "601160662503-38", 5979, 4604, null, null, "6mm", 250, 3, "195", "12,34", "1/2", "1/2", "1360", "220", "530", "2X1100", null, null, "407", "6mm Tavan Tipi Açılı Oda Soğutucu(Q Fanlı)");


data[124]=new crtOb("KKS-0800-TE", "4803300201250", 945, 737, null, null, "4.8mm", 250, 1, "45", null, "3/8", "1/2", "790", "150", "422", "2X300", null, null, "112", "4.8mm Karaman Tavan Tipi Ticari Soğutucu");
data[125]=new crtOb("KKS-1200-TE", "4803300241250", 1412, 1101, null, null, "4.8mm", 250, 1, "45", null, "3/8", "1/2", "790", "150", "422", "2X300", null, null, "123", "4.8mm Karaman Tavan Tipi Ticari Soğutucu");
data[126]=new crtOb("KKS-1500-TE", "4803300281250", 1753, 1367, null, null, "4.8mm", 250, 1, "45", null, "3/8", "1/2", "790", "150", "422", "2X300", null, null, "143", "4.8mm Karaman Tavan Tipi Ticari Soğutucu");
data[127]=new crtOb("KKS-1800-TE", "4803300361250", 2105, 1642, null, null, "4.8mm", 250, 1, "65", null, "3/8", "1/2", "790", "150", "422", "2X300", null, null, "158", "4.8mm Karaman Tavan Tipi Ticari Soğutucu");
data[128]=new crtOb("KKS-1800-TE", "4803300402250", 2195, 1470, null, null, "4.8mm", 250, 2, "90", null, "3/8", "1/2", "1190", "150", "422", "2X300", null, null, "201", "4.8mm Karaman Tavan Tipi Ticari Soğutucu");
data[129]=new crtOb("KKS-2200-TE", "4803300442250", 2683, 1797, null, null, "4.8mm", 250, 2, "130", null, "3/8", "1/2", "1190", "150", "422", "2X300", null, null, "235", "4.8mm Karaman Tavan Tipi Ticari Soğutucu");
data[130]=new crtOb("KKS-2500-TE", "4803300482250", 3047, 2041, null, null, "4.8mm", 250, 2, "130", null, "3/8", "1/2", "1190", "150", "422", "2X300", null, null, "261", "4.8mm Karaman Tavan Tipi Ticari Soğutucu");

data[131]=new crtOb("KTS-0650-TF", "480300201200", 776, 520, null, null, "4.8mm", 200, 1, "45", "1,5", "3/8", "1/2", "402", "130", "425", "1X300", null, null, "98", "4.8mm Tek Üflemeli Tavan Tipi Ticari Soğutucu");
data[132]=new crtOb("KTS-0850-TF", "480300241200", 1030, 690, null, null, "4.8mm", 200, 1, "45", "2,1", "3/8", "1/2", "402", "130", "425", "1X300", null, null, "102", "4.8mm Tek Üflemeli Tavan Tipi Ticari Soğutucu");
data[133]=new crtOb("KTS-1200-TF", "480300301200", 1420, 952, null, null, "4.8mm", 200, 1, "45", "2,5", "3/8", "1/2", "402", "155", "425", "1X300", null, null, "114", "4.8mm Tek Üflemeli Tavan Tipi Ticari Soğutucu");
data[134]=new crtOb("KTS-1400-CF", "480595201200", 1665, 1116, null, null, "4.8mm", 200, 2, "90", "3,1", "3/8", "1/2", "706", "130", "425", "1X650", null, null, "152", "4.8mm Tek Üflemeli Tavan Tipi Ticari Soğutucu");
data[135]=new crtOb("KTS-1600-CF", "480595241200", 1920, 1288, null, null, "4.8mm", 200, 2, "90", "3,5", "3/8", "1/2", "706", "130", "425", "1X650", null, null, "166", "4.8mm Tek Üflemeli Tavan Tipi Ticari Soğutucu");
data[136]=new crtOb("KTS-1850-CF", "480595301200", 2195, 1475, null, null, "4.8mm", 200, 2, "130", "4,9", "3/8", "1/2", "706", "155", "425", "1X650", null, null, "189", "4.8mm Tek Üflemeli Tavan Tipi Ticari Soğutucu");


data[137]=new crtOb("KYS-0650-RF", "480340121180", 758, 506, null, null, "4.8mm", 180, 1, "23", "1,9", "3/8", "3/8", "440", "345", "97", "2X300", null, null, "77", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");
data[138]=new crtOb("KOS-0650-KF", "480340122120", 735, 490, null, null, "4.8mm", 120, 2, "21", "1,9", "3/8", "3/8", "440", "345", "97", "2X300", null, null, "77", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");
data[139]=new crtOb("KYS-0850-RF", "480340181180", 999, 602, null, null, "4.8mm", 180, 1, "23", "2,4", "3/8", "3/8", "440", "547", "97", "2XX300", null, null, "85", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");
data[140]=new crtOb("KOS-0850-KF", "480340182120", 967, 581, null, null, "4.8mm", 120, 2, "21", "2,4", "3/8", "3/8", "440", "547", "97", "2X300", null, null, "85", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");
data[141]=new crtOb("KYS-0850-QF", "480340181200", 1038, 626, null, null, "4.8mm", 200, 1, "45", "2,4", "3/8", "3/8", "440", "547"," 97", "2X300", null, null, "96", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");
data[142]=new crtOb("KYS-1200-RF", "480340241180", 1411, 851, null, null, "4.8mm", 180, 1, "23", "2,8", "3/8", "3/8", "440", "595", "97", "2X300", null, null, "92", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");
data[143]=new crtOb("KOS-1200-KF", "480340242120", 1368, 825, null, null, "4.8mm", 120, 2, "21", "2,8", "3/8", "3/8", "440", "595", "97", "2X300", null, null, "92", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");
data[144]=new crtOb("KYS-1200-QF", "480340241200", 1467, 885, null, null, "4.8mm", 200, 1, "45", "2,8", "3/8", "3/8", "440", "595", "97", "2X300", null, null, "105", "4.8mm Tavan Tipi Yan ve Orta Asma Ticari Soğutucu");


data[145]=new crtOb("KRPE-2000", "639073123001", 3015, 2412, null, null, "6mm", 300, 1, "1X73", "8,5", "1/2", "16", "640", "424"," 330", null, null, null, "174", "6mm KRPE Serisi Standart Oda Soğutucu");
data[146]=new crtOb("KRPE-2500", "600390733001", 3476, 2780, null, null, "6mm", 300, 1, "1X73", "8,5", "1/2", "16", "640"," 424", "330", null, null, null, "190", "6mm KRPE Serisi Standart Oda Soğutucu");
data[147]=new crtOb("KRPE-3000", "600450833501", 4170, 3336, null, null, "6mm", 350, 1, "1X130", "11", "1/2", "16", "700", "480", "330", null, null, null, "217", "6mm KRPE Serisi Standart Oda Soğutucu");
data[148]=new crtOb("KRPE-3500", "600530934001", 4712, 3628, null, null, "6mm", 400, 1, "1X160", "14", "1/2", "22", "780", "536", "33", null, null, null, "236", "6mm KRPE Serisi Standart Oda Soğutucu");
data[149]=new crtOb("KRPE-4000", "605801034501", 5440, 4188, null, null, "6mm", 450, 1, "1X245", "16", "1/2", "28", "830", "592", "330", null, null, null, "269", "6mm KRPE Serisi Standart Oda Soğutucu");
data[150]=new crtOb("KRPE-5000", "600900833502", 6356, 5084, null, null, "6mm", 350, 2, "2X130", "20", "1/2", "28", "1150", "424", "330", null, null, null, "319", "6mm KRPE Serisi Standart Oda Soğutucu");
data[151]=new crtOb("KRPE-6000", "601050934002", 8580, 6606, null, null, "6mm", 400, 2, "2X160", "26", "1/2", "28", "1300", "536", "330", null, null, null, "378", "6mm KRPE Serisi Standart Oda Soğutucu");
data[152]=new crtOb("KRPE-7000", "601110934002", 9009, 6936, null, null, "6mm", 400, 2, "2X160", "28", "16", "28", "1360", "536", "330", null, null, null, "421", "6mm KRPE Serisi Standart Oda Soğutucu");
data[153]=new crtOb("KRPE-8500", "601150103452", 9976, 7682, null, null, "6mm", 450, 2, "2X245", "32", "16", "35", "1400", "592", "330", null, null, null, "482", "6mm KRPE Serisi Standart Oda Soğutucu");
data[154]=new crtOb("KRPE-11000", "601570934003", 13029, 10032, null, null, "6mm", 400, 3, "3X160", "39", "16", "35", "1820", "536", "330", null, null, null, "613", "6mm KRPE Serisi Standart Oda Soğutucu");


function findAltitude(value) {
    if(value - 2500 >= 0 )          return 0.85;
    else if(value - 2000 > 0 )      return 0.88;
    else if(value - 1500 > 0 )      return 0.91;
    else if(value - 1000 > 0 )      return 0.94;
    else if(value - 500  > 0 )      return 0.97;
    else                            return 1;

}


var temp=[];
/*switch(Sc.value){//sc değeri alınacak
    case SC1 :
        var lowerB= parseInt(capacity.value) - (parseInt(capacity.value) * parseInt(lowerBoundry.value) )
        var upperB= parseInt(capacity.value) + (parseInt(capacity.value) * parseInt(upperBoundry.value) )
        sc1Func(lowerB, upperB...);
        break;
    case SC2:
        sc2Func(lowerB,upperB ....)
}*/

function sc1Func(lowerBoundry, upperBoundry, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500) {
    for(var i=0 ; i<data.length; i++){
        if(data[i].sc1 > lowerBoundry && data[i].sc1 < upperBoundry){
            if(data[i].lamel == l4 || data[i].lamel == l6 || data[i].lamel == l8 || data[i].lamel == l10 || data[i].lamel == l12){ // valuelar "4mm" "6mm" seklinde strig olarak gelecek
                if(data[i].diameter == parseInt(f250)|| data[i].diameter == parseInt(f300)|| data[i].diameter == parseInt(f350)|| data[i].diameter == parseInt(f400)||
                    data[i].diameter == parseInt(f450)|| data[i].diameter == parseInt(f500)){
                        temp.push(data[i]);
                }
            }
        }
    }
    createTable(temp);
}
function sc2Func(lowerBoundry, upperBoundry, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500) {
    for(var i=0 ; i<data.length ; i++){
        if(data[i].sc2 > lowerBoundry && data[i].sc2 < upperBoundry){
            if(data[i].lamel == l4 || data[i].lamel == l6 || data[i].lamel == l8 || data[i].lamel == l10 || data[i].lamel == l12){ // valuelar "4mm" "6mm" seklinde strig olarak gelecek
                if(data[i].diameter == parseInt(f250)|| data[i].diameter == parseInt(f300)|| data[i].diameter == parseInt(f350)|| data[i].diameter == parseInt(f400)||
                    data[i].diameter == parseInt(f450)|| data[i].diameter == parseInt(f500)){
                    temp.push(data[i]);
                }
            }
        }
    }
    createTable(temp);
}
function sc3Func(lowerBoundry, upperBoundry, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500) {
    for(var i=0 ; i<data.length ; i++){
        if(data[i].sc3 > lowerBoundry && data[i].sc3 < upperBoundry){
            if(data[i].lamel == l4 || data[i].lamel == l6 || data[i].lamel == l8 || data[i].lamel == l10 || data[i].lamel == l12){ // valuelar "4mm" "6mm" seklinde strig olarak gelecek
                if(data[i].diameter == parseInt(f250)|| data[i].diameter == parseInt(f300)|| data[i].diameter == parseInt(f350)|| data[i].diameter == parseInt(f400)||
                    data[i].diameter == parseInt(f450)|| data[i].diameter == parseInt(f500)){
                    temp.push(data[i]);
                }
            }
        }
    }
    createTable(temp);
}
function sc4Func(lowerBoundry, upperBoundry, l4, l6, l8, l10, l12, f250, f300, f350, f400, f450, f500) {
    for(var i=0 ; i<data.length ; i++){
        if(data[i].sc4 > lowerBoundry && data[i].sc4 < upperBoundry){
            if(data[i].lamel == l4 || data[i].lamel == l6 || data[i].lamel == l8 || data[i].lamel == l10 || data[i].lamel == l12){ // valuelar "4mm" "6mm" seklinde strig olarak gelecek
                if(data[i].diameter == parseInt(f250)|| data[i].diameter == parseInt(f300)|| data[i].diameter == parseInt(f350)|| data[i].diameter == parseInt(f400)||
                    data[i].diameter == parseInt(f450)|| data[i].diameter == parseInt(f500)){
                    temp.push(data[i]);
                }
            }
        }
    }
    createTable(temp);
}

function createTable(temp) {
    var table = document.getElementById("search-table");
    var cell;    var cellText;
    for (var i = 0; i < temp.length; i++) {
        var row=document.createElement("tr");
        for (var property1 in temp[i]) {
            if(temp[i][property1] === null){ temp[i][property1] = "*";} 
            cell=document.createElement("td");
            cellText=document.createTextNode(temp[i][property1]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    clearArray();
}
function clearArray(){
	var temp_length=temp.length;
	 for(var i=0;i<temp_length;i++){
	 	temp.pop();
    }
}
function clearTable(){
	var cTable=document.getElementById("search-table");
	var rlength=cTable.childNodes.length;
	for(var i=2; i < rlength ; i++){
		cTable.deleteRow(2);
	}
	
}

//#endregion