# Requirements

In addition to the requirements from the Getting Started guide:

- NPM 3.x
- Visual Studio 2015 Community
- Windows 10 SDK Build 10586

If this is your first time using UWP, you may be able to install the SDK by opening the solution file in the ReactWindows folder in Visual Studio. After opening the solution, right click the Solution in the Solution Explorer and select the option labeled "Install Missing Components". You may have to shutdown Visual Studio to continue the installation.

# Install React Native

install react native cli

```npm install -g react-native-cli```

# Install 

install some package
```npm install```

Initialize Windows project with 
```react-native windows```
command in the project directory.

```Note : Overwrite index.windows.js please type "n"```

Run project
``` react-native run-windows```

#Note

for using "react-native-vector-icons" package

- Open your solution in Visual Studio, right click the Assets folder in your solution, click Add Existing.
- Browse to the node_modules\react-native-vector-icons\Fonts folder, select the required font files
- Click the Add drop-down and select Add as Link.
- Set Copy To Output Directory property of each font file to Copy if newer (each font file)

Note: you need to recompile your project after adding new fonts.