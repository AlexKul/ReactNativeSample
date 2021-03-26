# ReactNativeSample

## How to Install and run this app (MacOS)

#### Installing node and watchman:
```
brew install node
brew install watchman
```

#### Installing React Native:
```
npm install -g react-native-cli
npm install
```
#### if running doesnt work also try:
```
npm audit fix
```

#### Install Xcode command line tools:
-Install Xcode
-Install CLI tools by going to Xcode > Preferences > Locations > Command Line Tools (select latest version)

#### Install cocoapods for iOS:
```
sudo gem install cocoapods
```

#### Link & run the app (iOS):
```
react-native link
npm install
cd ios
pod install
cd ..
react-native run-ios
```