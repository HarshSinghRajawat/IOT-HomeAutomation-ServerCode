const {spawn}= require('child_process'); 
const fs=require('fs'); 

function relays(relay,status){
    this.relay=relay;
    this.status=status;
    var arg1="-r="+relay;
    var arg2="-s="+status;

    spawn('python',['/home/pi/myServer/py/Relay.py',arg1,arg2]);
}

module.exports={

    getTempreature: function (){
        spawn('python',['/home/pi/myServer/py/cmds.py', '-t=refresh']);
    
        var database=[];
        var jsonStr=fs.readFileSync('/home/pi/myServer/log.json');
        database=JSON.parse(jsonStr);
        
        
        return database[8].output;
    },

    shutdownNow: function (){
        spawn('python',['/home/pi/myServer/py/cmds.py', '-t=shutdown']);
    },

    rebootNow: function (){
        spawn('python',['/home/pi/myServer/py/cmds.py', '-t=reboot']);
    },

    log_Data: function (relay,status,method){
        var database=[];
        var jsonStr=fs.readFileSync('/home/pi/myServer/log.json');
        database=JSON.parse(jsonStr);
        var date=new Date();
        var curDate=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
        var curTime=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        var i=0;
        while(i<=7){
            if(i==(Number(relay)-1)){
                database[i].method=method;
                database[i].relay=relay;
                database[i].status=status;
                database[i].time=curTime;
                database[i].date=curDate;
            }
            i++;
        }
        fs.writeFileSync('/home/pi/myServer/log.json',JSON.stringify(database,null,4));
    },
    
    setRelay:function(key,value){
        relays(key,value);
    },
    
    reset_Relay: function (){
        var database={};
        var jsonStr=fs.readFileSync('/home/pi/myServer/log.json');
        database=JSON.parse(jsonStr);
        var i=0;
        while(i<8){
            var relay=new relays(i+1,database[i].status);
            i++;
        }
    },
    
    getJsonData: function (){
        var database=[];
        var jsonStr=fs.readFileSync('/home/pi/myServer/log.json');
        database=JSON.parse(jsonStr);
        return database;
    },
    updateJsonData: function (name,relay){
        var database=[];
        var jsonStr=fs.readFileSync('/home/pi/myServer/log.json');
        database=JSON.parse(jsonStr);
        var i=0;
        while(i<=7){
            if(i==(Number(relay)-1)){
            //database[i].status=status;
            //database[i].time=Date.now();
            database[i].relay_name=name;
            }
            i++;
        }
        fs.writeFileSync('/home/pi/myServer/log.json',JSON.stringify(database,null,4));
    },
    
    signal: function (){
        spawn('python',['/home/pi/myServer/py/Relay.py','-o=get']);
    },


    //Firebase Utils
    parseFirebaseRelayData: function(key,value,errorCallback){


        //relays(value.relay,value.status);

        console.log("relay " +value.relay + " is now " + value.status);
    },
    
}
