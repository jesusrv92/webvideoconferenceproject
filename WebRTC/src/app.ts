const VIDEO_INPUT = 'videoinput';
const AUDIO_INPUT = 'audioinput';
const AUDIO_OUTPUT = 'audiooutput';

const openMediaDevices = async (constraints: MediaStreamConstraints | undefined) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
};

async function getConnectedDevices(type: string) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type);
}

function updateCameraList(cameras: MediaDeviceInfo[]) {
    const listElement = document.querySelector("select#availablecameras") as HTMLSelectElement;
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
            // audio: {
            //     autoGainControl: true,
            //     echoCancellation: true,
            //     volume: .5
            // }
        };
        // const constraints = {
        //     video: true,
        //     // audio:{
        //     //     echoCancellation: true
        //     // },
        // };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
        const videoElement: HTMLVideoElement | null = document.querySelector('video#localVideo');
        videoElement!.srcObject = stream;
        console.log(videoElement!.srcObject);
        console.log('Sucessfully set camera');
    }
    catch (error) {
        console.error('Error opening video camera.', error);
    }
}

async function main() {
    try {
        playVideoFromCamera();
        // const stream = openMediaDevices({ video: true, audio: true });
        // console.log('Got MediaStream: ', stream);
        // const videoCameras = getConnectedDevices(VIDEO_INPUT);
        // videoCameras.then(updateCameraList);
        // navigator.mediaDevices.addEventListener('devicechange', event => {
        //     const newCameraList = getConnectedDevices(VIDEO_INPUT);
        //     newCameraList.then(updateCameraList);
        // });
        // updateCameraList();
        // console.log('Cameras: ',videoCameras);
        // const microphones = getConnectedDevices(AUDIO_INPUT);
        // console.log('Microphones: ',microphones);
        // const speakers = getConnectedDevices(AUDIO_OUTPUT);
        // console.log('Speakers: ',speakers);

    } catch (error) {
        console.error('Error accessing media devices.', error)
    }
}

main();