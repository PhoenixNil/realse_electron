// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const ipcMain = require('electron').ipcMain
const electron = require('electron')
const Menu = electron.Menu
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let SetWindow
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 1000, height: 562, frame: false, resizable: false })
  SetWindow = new BrowserWindow({ width: 900, height: 770, resizable: false })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  SetWindow.loadFile('SetWindow.html')
  SetWindow.hide()
  Menu.setApplicationMenu(null)

  // Open the DevTools.
  // SetWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    app.quit()
  })
  SetWindow.on('closed', function () {
    app.quit();
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
// mainWindow.on('closed', function () {
//   app.quit();
// });


app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }

})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('window-all-closed', () => {
  mainWindow.close();
});
ipcMain.on('hide-window', () => {
  mainWindow.minimize();
});
ipcMain.on('two-show', function () {
  mainWindow.hide();
  SetWindow.show();
})
ipcMain.on('BackSet', function () {
  SetWindow.loadFile('SetWindow.html')
})