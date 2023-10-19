(function() {
  'use strict';

  class FTMSSensor {

    constructor() {
      this.device = null;
      this.server = null;
      this._characteristics = new Map();
      this.gotFeature = false;
    }
    connect() {
      return navigator.bluetooth.requestDevice({filters:[{services:[ 'fitness_machine' ]}]})
      .then(device => {
        this.device = device;
        return device.gatt.connect();
      })
      .then(server => {
        this.server = server;
        return server.getPrimaryService('fitness_machine');
      })
          .then(service => {
              console.log('a');
            
        this._cacheCharacteristic(service, 'fitness_machine_control_point');
        return this._cacheCharacteristic(service, 'indoor_bike_data');
      })
         
    }

  

    startNotificationsIndoorBikeData() {
      return this._startNotifications('indoor_bike_data');
    }
    stopNotificationsIndoorBikeData() {
      return this._stopNotifications('indoor_bike_data');
    }


    setSlope(slopePercent) {

        console.log('in set slope');

        let crr = 0x28; // Asphalt Road (default)
        let wrc = 0x33; // Wind resistance coed

        let s = Math.floor(slopePercent / 0.01); // slopepercentage is a float

        let grade = new Uint8Array(new Uint16Array([s]).buffer);

        let req = new Uint8Array([0x11, 0x00, 0x00, grade[0], grade[1], crr, wrc]);


        let characteristic = this._characteristics.get('fitness_machine_control_point');
        console.log(characteristic);


            characteristic.writeValueWithResponse(req)
 .then(() => {
        console.log('write successfully')
    })
 .catch (error => {
        console.log(error);
    });
       // BluetoothLEHardwareInterface.WriteCharacteristic(address, ServiceUUID, WriteCharacteristic, req, req.Length, true, (characteristicUUID) => {
            //luetoothLEHardwareInterface.Log("FTMS SetIndoorBikeSimulationParameter Write Succeeded");
       // });


    }


    parseIndoorBikeData(value) {



      // In Chrome 50+, a DataView is returned instead of an ArrayBuffer.
      value = value.buffer ? value : new DataView(value);
      let flags = value.getUint16(0, true);
  //   for (let i = 0; i < 16; i++) {
 // console.log("flags[" + i + "] = " + !!((flags >>> i) & 1));
//}
    

      let result = {};
      let index = 2;
   

       if ((flags & 0x01) == 0){
        
        result.speedInKph = value.getUint16(index, /*littleEndian=*/true) * 0.01;
        index += 2;
      } 
    
     
    if ((flags & 0x02) != 0)  //avg speed
        {
            index += 2;

        }

        if ((flags & 0x04) != 0)// insta cadence
        {
            index += 2;

        }

        if ((flags & 0x08) != 0) {
            index += 2;

        }

        if ((flags & 0x10) != 0) {
            index += 3;

        }

        if ((flags & 0x20) != 0) {
            index += 2;

        }

        if ((flags & 0x40) != 0) {

           
            result.power =   value.getUint16(index, /*littleEndian=*/true);
           
            }
      

      return result;
    }

    /* Utils */

    _cacheCharacteristic(service, characteristicUuid) {
      return service.getCharacteristic(characteristicUuid)
      .then(characteristic => {
        this._characteristics.set(characteristicUuid, characteristic);
      });
    }
    _readCharacteristicValue(characteristicUuid) {
      let characteristic = this._characteristics.get(characteristicUuid);
      return characteristic.readValue()
      .then(value => {
        // In Chrome 50+, a DataView is returned instead of an ArrayBuffer.
        value = value.buffer ? value : new DataView(value);
        return value;
      });
    }
    _writeCharacteristicValue(characteristicUuid, value) {
      let characteristic = this._characteristics.get(characteristicUuid);
      return characteristic.writeValue(value);
    }
    _startNotifications(characteristicUuid) {
      let characteristic = this._characteristics.get(characteristicUuid);
      // Returns characteristic to set up characteristicvaluechanged event
      // handlers in the resolved promise.
      return characteristic.startNotifications()
      .then(() => characteristic);
    }
    _stopNotifications(characteristicUuid) {
      let characteristic = this._characteristics.get(characteristicUuid);
      // Returns characteristic to remove characteristicvaluechanged event
      // handlers in the resolved promise.
      return characteristic.stopNotifications()
      .then(() => characteristic);
    }
  }

  window.ftmsSensor = new FTMSSensor();

})();
