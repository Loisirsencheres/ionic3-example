# Loisirs Encheres Ionic

The project runs using ionic technology.  
This technology use Angular 2 with Typescript.


### Project dependencies

```
npm install -g ionic cordova
npm install
```

# Running the application

### On chrome

You must first launch Chrome without web security.

```
open -a Google\ Chrome --args --disable-web-security --user-data-dir
```

On Windows create a shortcut with both of these arguments :

```
chrome.exe --user-data-dir="C://ChromeDevSession" --disable-web-security
```

Next, you can run :

```
ionic serve
```

### On iOS

```
npm install -g ios-deploy
```

Download and Install your Provisioning Profiles on apple developer website.


```
ionic cordova platform add ios
cd platforms/ios 
pod install
cd ../..
open -a Xcode platforms/ios
```

Singing your app with your Provisioning Profiles

```
ionic cordova build ios
```

Connect your device, wait for indexing files et run the app.
