function mySettings(props) {
  return (
    <Page>
         <Select
            label="Theme"
            settingsKey="theme"
            options={[
               {
                 name: "Red",
                 value: {
                   background: "#cc0000",
                   foreground: "#ff9d00"
                 }
               },
               {
                 name: "Indigo",
                 value: {
                   background: "#5b4cff",
                   foreground: "#17f30c"
                 }
               },
               {
                 name: "Orange",
                 value: {
                   background: "#ff9d00",
                   foreground: "#ffa000"
                 }
               },
               {
                 name: "Violet",
                 value: {
                   background: "#b400ff",
                   foreground: "#003aff"
                 }
               },
               {
                 name: "Cyan",
                 value: {
                   background: "#008888",
                   foreground: "#00eeee"
                 }
               },
               {
                 name: "Gold",
                 value: {
                   background: "#776600",
                   foreground: "#eedd00"
                 }
               }]
            }
          />
    </Page>
  );
}

registerSettingsPage(mySettings);