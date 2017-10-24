function Colors(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Watch Color</Text>}>
        <ColorSelect
          settingsKey="watchColor"
          colors={[
            {color: '#cc0000'},
            {color: '#00ced1'},
            {color: '#00bfff'},
            {color: '#ff8c00'},
            {color: '#9400D3'},
            {color: '#7b68ee'},
            {color: '#008080'}
          ]}
        />
      </Section>
      <Section title={<Text bold align="center">StepsBeam Color</Text>}>
        <ColorSelect
          settingsKey="stepColor"
          colors={[
            {color: '#4edcfb'},
            {color: '#ff9d00'},
            {color: '#17f30c'},
            {color: '#b400ff'},
            {color: '#fffc27'}
          ]}
        />
      </Section>
      <Section title={<Text bold align="center">CaloriesBeam Color</Text>}>
        <ColorSelect
          settingsKey="calColor"
          colors={[
            {color: '#4edcfb'},
            {color: '#ff9d00'},
            {color: '#17f30c'},
            {color: '#b400ff'},
            {color: '#fffc27'}
          ]}
        />
      </Section>
      <Section title={<Text bold align="center">ElevationGainBeam Color</Text>}>
        <ColorSelect
          settingsKey="stairColor"
          colors={[
            {color: '#4edcfb'},
            {color: '#ff9d00'},
            {color: '#17f30c'},
            {color: '#b400ff'},
            {color: '#fffc27'}
          ]}
        />
      </Section>
      <Section title={<Text bold align="center">ActiveBeam Color</Text>}>
        <ColorSelect
          settingsKey="activeColor"
          colors={[
            {color: '#4edcfb'},
            {color: '#ff9d00'},
            {color: '#17f30c'},
            {color: '#b400ff'},
            {color: '#fffc27'}
          ]}
        />
      </Section>
    </Page>
  )
}

registerSettingsPage(Colors);