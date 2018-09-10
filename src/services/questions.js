// liste de question
export default [
  {
    name: 'transport',
    question: 'Souhaitez-vous deplacer votre ordinateur ?',
    type: 'radio',
    reponses: [{ id: 'yes', reponse: 'Oui', apiKey: [{type: 'laptop'}] }, { id: 'no', reponse: 'Non', apiKey: [{type: 'desktop'}] }],
  },
  {
    name: 'logiciel',
    question: 'Quels sont vos usages ?',
    type: 'checkbox',
    reponses: [
      { id: 'text', reponse: 'Bureautique', apiKey: [ {processor: 'i3'} ]  },
      { id: 'graphist', reponse: 'Retouche photo', apiKey: [ {processor: 'i5'}, {ram: '8go'} ]  },
      { id: 'videogame', reponse: 'Jeux vidéo', apiKey: [ {processor: 'i5'}, {ram: '8go'} ]  },
      { id: 'editvideo', reponse: 'Edition vidéo', apiKey: [ {processor: 'i7'}, {ram: '8go'}]  },
      { id: 'threed', reponse: '3D', apiKey: [ {processor: 'i7'}, {ram: '16go'}]  },
    ],
  },
  {
    name: 'numerique',
    question: 'Souhaitez-vous un pavé numérique ?',
    type: 'radio',
    reponses: [
      { id: 'yes', reponse: 'Oui', apiKey: [ {numeric: 'yes'} ] },
      { id: 'no', reponse: 'Non', apiKey: [ {numeric: 'no'} ] },
      { id: 'nothing', reponse: "Pas d'importance", apiKey: [ {numeric: ''} ] },
    ],
  },
  {
    name: 'ecran',
    question: 'Souhaitez-vous un grand écran ?',
    type: 'radio',
    reponses: [
      { id: 'yes', reponse: 'Oui', apiKey: [ {screen: '>15'} ] },
      { id: 'no', reponse: 'Non', apiKey: [ {screen: '13'} ] },
      { id: 'nothing', reponse: "Pas d'importance", apiKey: [ {screen: ''} ] },
    ],
  },
  {
    name: 'prix',
    question: 'Quelle fourchette de prix ?',
    type: 'select',
    reponses: [
      { id: 'less300', reponse: 'Moins de 300e', apiKey: [ {price: '<300'} ] },
      { id: 'more300to600', reponse: 'Entre 300e et 600e', apiKey: [ {price: '300-600'} ] },
      { id: 'more600to1000', reponse: 'Entre 600e et 1000e', apiKey: [ {price: '600-1000'} ] },
      { id: 'more1000', reponse: 'Plus de 1000e', apiKey: [ {price: '>1000'} ] },
    ],
  },
]
