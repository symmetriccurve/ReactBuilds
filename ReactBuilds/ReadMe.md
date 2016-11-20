

Here are couple of ways to point to different Environments with in your React-Native App.
Change Approches under the index.ios.js Here : https://github.com/symmetriccurve/ReactBuilds/blob/master/ReactBuilds/index.ios.js#L23

Approach#1

Fetch the Config from a Remote Server. 
(More Control over the app, and it does not need to re-build the app)

Approach#2

Old School method of chaging the Mode in the JS files here : https://github.com/symmetriccurve/ReactBuilds/blob/master/ReactBuilds/Approach2/Approach2.js#L15


Approach#3

Using import Config2 from 'react-native-config'
This Approach is bit of incomplete as it does not pick the .envProb or .envStage files while building it from terminal

Approach#4

Using Complete independent Native Module(and using React Bridging) on iOS and Android that can figure out the BuildMode from the Xcode(in Case of iOS) and AndroidStudio(in Case of Android).

https://github.com/symmetriccurve/ReactBuilds/blob/master/ReactBuilds/Approach4/Approach4.js#L17
