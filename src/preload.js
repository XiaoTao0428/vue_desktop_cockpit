import { contextBridge, ipcRenderer } from 'electron'

// Expose ipcRenderer to the client
contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => {
        let validChannels = ['window-min', 'window-max', 'window-close'] // <-- Array of all ipcRenderer Channels used in the client
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data)
        }
    },
    receive: (channel, func) => {
        let validChannels = ['main-window-max', 'main-window-unmax'] // <-- Array of all ipcMain Channels used in the electron
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (event, ...args) => func(...args))
        }
    }
})
