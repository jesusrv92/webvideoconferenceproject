"use strict";
const VIDEO_INPUT = 'videoinput';
const AUDIO_INPUT = 'audioinput';
const AUDIO_OUTPUT = 'audiooutput';
const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
};
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type);
}
function updateCameraList(cameras) {
    const listElement = document.querySelector("select#availablecameras");
    listElement.innerHTML = '';
    cameras.map(camera => {
        const cameraOption = document.createElement('option');
        cameraOption.label = camera.label;
        cameraOption.value = camera.deviceId;
        return cameraOption;
    }).forEach(cameraOption => listElement.add(cameraOption));
}
async function playVideoFromCamera() {
    try {
        const constraints = {
            video: {
                width: 320,
                height: 240
            },
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
        console.log(videoElement.srcObject);
        console.log('Sucessfully set camera');
    }
    catch (error) {
        console.error('Error opening video camera.', error);
    }
}
async function main() {
    try {
        playVideoFromCamera();
    }
    catch (error) {
        console.error('Error accessing media devices.', error);
    }
}
main();
