module.exports = {
  TOKEN: "",
  ownerID: ["1004206704994566164", ""], 
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  musicardTheme:"themes16", //Goes from themes1 to themes19
  SupportServer: "https://discord.gg/43VDd3UTrM",
  CheckmarkIcon: "https://cdn.discordapp.com/emojis/819446784647757834.gif",
  MusicIcon:"https://cdn.discordapp.com/emojis/763415718271385610.gif",
  embedTimeout: 5,  // Timeout before the button interaction embeds are deleted ( Default - 5 seconds)
  errorLog: "", 
    name: 'ready',
    once: true,
    execute(client) {
  
        const activities = [
            { name: 'Inazuma Eleven Italia', type: ActivityType.Watching },
            { name: 'Inazuma Eleven Victory Road', type: ActivityType.Playing },
            { name: 'Inazuma Eleven Cheats', type: ActivityType.Watching },
            { name: 'Inazuma Ost', type: ActivityType.Listening },
        ];

     
        const statuses = ['online', 'idle', 'dnd'];

     
        let currentActivityIndex = 0;
        let currentStatusIndex = 0;

 
        function setActivityAndStatus() {
        
            const activity = activities[currentActivityIndex];
            const status = statuses[currentStatusIndex];

          
            client.user.setPresence({
                activities: [activity],
                status: status,
            });

            
            currentActivityIndex = (currentActivityIndex + 1) % activities.length;
            currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
        }

        
        setTimeout(() => {
            setActivityAndStatus();
            console.log('\x1b[31m[ CORE ]\x1b[0m \x1b[32m%s\x1b[0m', 'Bot Activity Set Successful ✅');
        }, 2000);

        setInterval(() => {
            setActivityAndStatus();
        }, 6000);
    },

   // Lavalink Server Details

  nodes: [
    {
        name: "Server",
        host: "nodev4.fypmoon.org",
        port: 1118,
        password: "fypmoon.org",
        reconnectTimeout: 5000,
        reconnectTries: Infinity,
        secure: false
    },
 ]
}