// liste de question
export default [
  {
    name: 'transport',
    question: 'Souhaitez-vous deplacer votre ordinateur ?',
    type: 'radio',
    reponses: [{ id: 'yes', reponse: 'Oui', apiKey: 'laptop' }, { id: 'no', reponse: 'Non', apiKey: 'desktop' }],
  },
  {
    name: 'logiciel',
    question: 'Quels sont vos usages ?',
    type: 'checkbox',
    reponses: [
      { id: 'text', reponse: 'Bureautique', apiKey: 'i3' },
      { id: 'graphist', reponse: 'Retouche photo', apiKey: 'i5 8go' },
      { id: 'videogame', reponse: 'Jeux vidéo', apiKey: 'i5 8go' },
      { id: 'editvideo', reponse: 'Edition vidéo', apiKey: 'i7 8go' },
      { id: 'threed', reponse: '3D', apiKey: 'i7 16go' },
    ],
  },
  {
    name: 'numerique',
    question: 'Souhaitez-vous un pavé numérique ?',
    type: 'radio',
    reponses: [
      { id: 'yes', reponse: 'Oui', apiKey: 'pavé numerique' },
      { id: 'no', reponse: 'Non', apiKey: '' },
      { id: 'nothing', reponse: "Pas d'importance", apiKey: ''},
    ],
  },
  {
    name: 'ecran',
    question: 'Souhaitez-vous un grand écran ?',
    type: 'radio',
    reponses: [
      { id: 'yes', reponse: 'Oui', apiKey: '15"' },
      { id: 'no', reponse: 'Non', apiKey: '13"' },
      { id: 'nothing', reponse: "Pas d'importance", apiKey: '' },
    ],
  },
  {
    name: 'prix',
    question: 'Quelle fourchette de prix ?',
    type: 'select',
    reponses: [
      { id: 'less300', reponse: 'Moins de 300e', apiKey: '300€' },
      { id: 'more300to600', reponse: 'Entre 300e et 600e', apiKey:  '300€ 600€' },
      { id: 'more600to1000', reponse: 'Entre 600e et 1000e', apiKey: '600€ 1000€' },
      { id: 'more1000', reponse: 'Plus de 1000e', apiKey: '1000€' },
    ],
  },
]
