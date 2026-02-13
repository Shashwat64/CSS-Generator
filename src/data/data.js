const data = [
  {
    name: 'Box Shadow',
    properties:{
      Horizontal: 7,
      Vertical: 8,
      Blur: 24,
      Spread: 0,
      Color: {
        value: '#FFFFFF',
        opacity: 0.6
      },
      Inset: false
    },
    min:{
      Horizontal: -100,
      Vertical: -100,
      Blur: 0,
      spread: 0,
    },
    max:{
      Horizontal: 100,
      Vertical: 100,
      Blur: 50,
      spread: 50,
    }

  },{
    name: 'Text Shadow',
    properties:{
      Text:'Text Content',
      Horizontal: 7,
      Vertical: 8,
      Blur: 24,
      Color: {
        value: '#FFFFFF',
        opacity: 0.6
      },
    },
    min:{
      Horizontal: -100,
      Vertical: -100,
      Blur: 0,
      spread: 0,
    },
    max:{
      Horizontal: 100,
      Vertical: 100,
      Blur: 50,
      spread: 50,
    }
  },{
    name: 'Flexbox',
    properties:{
      Display:["Display","flex","inline-flex"],
      flexDirection:["Flex Direction","row","column", "reverse-row","reverse-coloumn"],
      flexWrap: ["Flex Wrap","wrap", "no-wrap", "wrap-reverse"],
      justifyContent: ["Justify Content","flex-start", "flex-end", "center", "space-between", "space-around"],
      alignItems: ["Align Items","flex-start", "flex-end", "center", "baseline", "stretch"],
      alignContent:["Align Content","flex-start", "flex-end", "center", "space-between", "space-around", "stretch"]
    },
    element:2
  },{
    name: 'Border Radius'
  }
]

export default data