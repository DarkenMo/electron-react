const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

const DiscordRPC = require('discord-rpc');

// discord activity settings
const clientId = 'YOUR CLIENT ID';
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
    if (!rpc) {
        return;
    }

    rpc.setActivity({
        details: `text`, //details
        startTimestamp, //REQUIRED
        largeImageKey: "text", //large image that your using
        largeImageText: "text", //text of the large image
        smallImageKey: "text", //small image you are using
        smallImageText: "text", // text of the small image
        instance: false, //ignore this i dont know what this is either
    });
}

rpc.on('ready', () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15e3);
});
rpc.login({ clientId }).catch(console.error);



function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/favicon.ico',
        webPreferences: {
            nodeIntegration: true,
        },
    });


    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }
}


app.whenReady().then(createWindow);


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});