import { app, BrowserWindow } from 'electron/main'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    titleBarStyle: 'hidden',
    resizable: false,
    fullscreenable: false,
  })

  //win.loadFile('index.html')
  win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})