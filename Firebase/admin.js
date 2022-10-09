const admin = require("firebase-admin");
const { getTempreature, parseFirebaseRelay, parseFirebaseRelayData, shutdownNow, rebootNow } = require("../routes/Operations/Operations");

var serviceAccount = require("./homeserver-e2a64-firebase-adminsdk-3jemk-92e2ac49ae.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://homeserver-e2a64-default-rtdb.firebaseio.com"
});

const database = admin.database()
const relayRef = database.ref('/KmGa20NqmGZoIPOjdS4ALP0IHv93/admin/relays');
const piRef = database.ref('/KmGa20NqmGZoIPOjdS4ALP0IHv93/admin/pi');


module.exports= {
  admin,

  initRelayListeners: function(){
    relayRef.on('child_changed', data => {
      var key = data.key;
      var value = data.val();
      
      parseFirebaseRelayData(key,value,()=>{
          database.ref('/KmGa20NqmGZoIPOjdS4ALP0IHv93/admin/error').set({"Error":"Relay Not Found for -> "+key+" : "+data.val()});
      });

    });
  },

  initInfoListener: function(){
      piRef.on('child_changed',data=>{
        var event = data.key;
        var value = data.val();
        
        if(event == 'refresh'){
            if(value){
                var temp = 'getTempreature()';
                var cpu_usage = '0%';

                piRef.set({'refresh':false,'temp':temp,'cpu':cpu_usage});
            }
        }
      });
  },

  triggerShutdownListener: function(){
    piRef.on('child_changed',data =>{
      var event = data.key;
      var value = data.val();

      if(event == 'PowerOff'){
        if(value){
          piRef.update({'PowerOff':false});
          shutdownNow()
        }
      }

    })
  },

  triggerRebootListener: function(){
    piRef.on('child_changed',data =>{
      var event = data.key;
      var value = data.val();

      if(event == 'Reboot'){
        if(value){
          piRef.update({'Reboot':false});
          rebootNow()
        }
      }

    })
  },

  resetRelayListener: function(){
      relayRef.orderByKey().once('value', data=>{
            data.forEach(relay=>{
                parseFirebaseRelayData(relay.key,relay.val(),()=>{
                    database.ref('/KmGa20NqmGZoIPOjdS4ALP0IHv93/admin/error').set({"ResetError":"Error while Reseting relays!"});
                });
            });
      });
  }
};