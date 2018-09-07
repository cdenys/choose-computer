// liste de question
export default [
  {
    name: 'transport',
    question: 'Souhaitez-vous deplacer votre ordinateur ?',
    type: 'radio',
    reponses: [{ id: 'yes', reponse: 'Oui' }, { id: 'no', reponse: 'Non' }],
  },
  {
    name: 'logiciel',
    question: 'Quels sont vos usages ?',
    type: 'checkbox',
    reponses: [
      { id: 'text', reponse: 'Bureautique' },
      { id: 'graphist', reponse: 'Retouche photo' },
      { id: 'threed', reponse: '3D' },
      { id: 'editvideo', reponse: 'Edition vidéo' },
      { id: 'videogame', reponse: 'Jeux vidéo' },
    ],
  },
  {
    name: 'numerique',
    question: 'Souhaitez-vous un pavé numérique ?',
    type: 'radio',
    reponses: [
      { id: 'yes', reponse: 'Oui' },
      { id: 'no', reponse: 'Non' },
      { id: 'nothing', reponse: "Pas d'importance" },
    ],
  },
  {
    name: 'ecran',
    question: 'Souhaitez-vous un grand écran ?',
    type: 'radio',
    reponses: [
      { id: 'yes', reponse: 'Oui' },
      { id: 'no', reponse: 'Non' },
      { id: 'nothing', reponse: "Pas d'importance" },
    ],
  },
  {
    name: 'prix',
    question: 'Quelle fourchette de prix ?',
    type: 'select',
    reponses: [
      { id: 'less300', reponse: 'Moins de 300e' },
      { id: 'more300to600', reponse: 'Entre 300e et 600e' },
      { id: 'more600to1000', reponse: 'Entre 600e et 1000e' },
      { id: 'more1000', reponse: 'Plus de 1000e' },
    ],
  },
]
