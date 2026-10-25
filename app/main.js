import { app, BrowserWindow } from 'electron'
import path from 'node:path'

function createMainWindow() {
  const win = new BrowserWindow({ width: 400, height: 700 })
  win.loadFile(path.join(import.meta.dirname, 'index.html'))
  return win
}

app.whenReady().then(createMainWindow)
app.on('window-all-closed', () => app.quit())
