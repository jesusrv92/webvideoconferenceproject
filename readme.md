# WebRTC

WebRTC is a web technology that lets you add real-time communication capabilities to your app.
It supports video, voice and generic data to be sent between peers.
The WebRTC standard covers, on a high level, two different technologies: media capture devices and peer-to-peer connectivity.
This technology is available on all modern browsers as well as native clients.
The technologies behind WebRTC are implemented as an open web standard and available as regular JavaScript APIs in all major browsers.
For native clients, like Android and iOS applications, a library is available that provides the same functionality. 

The WebRTC project is open-source and supported by Apple, Google, Microsoft and Mozilla, amongst others.

##  What can WebRTC do?

There are many different use-cases for WebRTC, from basic web apps that uses the camera or microphone, to more advanced video-calling applications and screen sharing.

##  Application flow

A WebRTC application will usually go through a common application flow.

1. Accessing the media devices
2. Opening peer connections
3. Discovering peers
4. Start streaming

## Accessing the media devices

Media capture devices includes video cameras and microphones, but also screen capturing "devices". 
For cameras and microphones, we use navigator.mediaDevices.getUserMedia() to capture MediaStreams. 
For screen recording, we use navigator.mediaDevices.getDisplayMedia() instead.

## Opening peer connections

The peer-to-peer connectivity is handled by the RTCPeerConnection interface. 
This is the central point for establishing and controlling the connection between two peers in WebRTC.