# phaser-electron

clone project: [ git clone https://github.com/Jortsoft/phaser-electron.git ]

enter project directory [ cd phaser-electron ]

enter electron folder [ cd electron ]

install modules [ npm i ]

Done electron is ready!

if you can run electron app to development mode run
[ npm start ]

game folder is a main root folder with phaser and all assets.
if you want open game in web, just open [ index.html ] file.

budil game to production!
Windows [  electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Electron Tutorial App" ]

Linux [ electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds ]

Mac os [ electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds ]

rendered game is in release-build folder!
