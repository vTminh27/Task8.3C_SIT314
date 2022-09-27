const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

const topic="/drones"
const topic1="/drones/short/speed"
const topic2="/drones/long/battery"
const topic3="/drones/long/latLong"
var message = "testing drones"
var message1 = "20km/h"
var message2 = "20%"
var message3 = "90 degree"


client.on('connect', () => {
    console.log('mqtt connected');
    client.publish(topic, message);
    console.log('published to Topic: ' + topic + " with Message: " + message);
    client.publish(topic1, message1);
    console.log('published to Topic: ' + topic1 + " with Message: " + message1);
    client.publish(topic2, message2);
    console.log('published to Topic: ' + topic2 + " with Message: " + message2);
    client.publish(topic3, message3);
    console.log('published to Topic: ' + topic3 + " with Message: " + message3);
});