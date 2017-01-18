# SCA-Mobile
> a react native client for sca-dashboard's backend

Originally cloned from https://github.com/spencercarli/react-native-meteor-boilerplate

## Development
#### Running on iOS Simulator

_Note_: You must be on a Mac for this.

Be sure your meteor app is running, then run: `react-native run-ios`


#### Running on iOS Device

_Note_: You must be on a Mac for this.

- Be sure your meteor app is running
- Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)
- In `app/config/settings.js` change `localhost` to your machine's IP address
- Plug your device into your computer (make sure it's on the same network)
- Open the project in Xcode
- Select your device in Xcode and press "Build and run"

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content).
Alternatively for [android](https://facebook.github.io/react-native/docs/running-on-device-android.html#content).

## Goals

* Build a [share extension](https://github.com/alinz/react-native-share-extension) in order for the user to add items to their cart from their mobile browser.
    1. Share extension api only gives us the page url so we need to create a window with [jsdom](https://github.com/tmpvar/jsdom) to get the htmlClone.
    2. Send the url and htmlClone to RPC method for product detail page extraction.
    3. Notify the user that the selectables are incorrect. Maybe show them the extracted selectabled so that they can self select them
* Build a mobile app that displays the users information and items and allows them to take some actions.

## Project Structure

Check out [this article](https://medium.com/@spencer_carli/organizing-a-react-native-project-9514dfadaa0#.361gf1awu) for an overview.
