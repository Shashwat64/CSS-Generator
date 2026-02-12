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
    name: 'Flexbox'
  },{
    name: 'Border Radius'
  }
]

export default data