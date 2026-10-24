var CONFIG = {
  title: 'Living room',
  subtitle: 'Built from two phone photos · sizes estimated, see “Estimates”',
  storageKey: 'room-living-room-v1',
  accent: 0x1f4fd8, fill: 0xa6c0f6,
  view: 'se', look: 'colour',
  TEXTURES: 'textures/',
  PALETTE: {
    paint: [['Textured wallpaper', 0xd8d2c6], ['Warm white', 0xf4f1ea], ['Pale sage', 0xdfe4d8], ['Dusty blue', 0x9db2c4], ['Charcoal', 0x3e3f3d]],
    wood: [['Light oak laminate', 0xd3b184], ['Pale oak', 0xd8bb93], ['Walnut', 0x8a6443], ['Black gloss', 0x1b1b1d]],
    fabric: [['Sage grey', 0x93a39e], ['Charcoal waffle', 0x4a4c55], ['Teal', 0x2a9bb0], ['Linen', 0xe9dfcc], ['Terracotta', 0xd6aa98]]
  },
  LOOKS: [
    {name: 'As photographed', colors: {}},
    {name: 'Warm white walls', colors: {walls: 0xf4f1ea, trim: 0xf4f1ea}},
    {name: 'Dusty blue walls', colors: {walls: 0x9db2c4, trim: 0xf4f1ea}}
  ],
  ROOM: {
    /* Plan: the window wall is the top wall, the sofa wall the left one. Inner wall faces, clockwise from the top-left corner. */
    outline: [[0, 0], [145, 0], [145, 165], [0, 165]],
    height: 98, wall: 5,
    walls: 0xd8d2c6, floor: 0xd3b184, trim: 0xd9c7ab,
    boards: 7, boardsDir: 'y',
    openings: [
      {type: 'window', c: [75, 0], width: 74, sill: 30, head: 88, panes: 3},
      {type: 'opening', c: [145, 115], width: 84, head: 96, clear: 24, label: 'Kitchen'}
    ],
    fixed: [],
    verify: [
      'Ceiling height 98″ (2.5 m): assumed, not measured',
      'Room width 145″ (3.7 m): solved from both photos, ±6″',
      'Room depth 165″ (4.2 m): the near wall is in neither photo, so this is a placeholder',
      'TV wall 73″ long, then the opening to the kitchen: from the pier edge in photo 2',
      'Window 74″ wide from x 38″, sill 30″, head 88″: from photo 1 with the solved camera',
      'Sofa 88″ × 38″, pouf 44″ × 30″, TV 50″ on a 52″ console: read off the photos, ±10 %',
      'Curtains 30″ panels and the radiator drawn as plain boxes',
      'Left out: ceiling spot lights, the wardrobe at the left edge of photo 1, bags, laptop, sheer curtain'
    ]
  },
  ITEMS: {
    sofa:   {name: 'Sofa', type: 'sofa', w: 88, d: 38, h: 32, color: 0x93a39e, color2: 0x4a4c55},
    pouf:   {name: 'Pouf', type: 'ottoman', w: 44, d: 30, h: 17, color: 0x9fb0ac, color2: 0xd8bb93},
    stand:  {name: 'TV console', type: 'media', w: 52, d: 17, h: 19, color: 0x1b1b1d},
    tv:     {name: 'TV 50″', type: 'media', w: 44, d: 3, h: 25, tv: 50, mount: 28, color: 0x1b1b1d},
    curL:   {name: 'Curtain left', type: 'box', w: 30, d: 3, h: 96, color: 0x2a9bb0},
    curR:   {name: 'Curtain right', type: 'box', w: 30, d: 3, h: 96, color: 0x2a9bb0},
    rad:    {name: 'Radiator', type: 'box', w: 50, d: 4, h: 21, color: 0xf4f1ea}
  },
  LAYOUTS: [
    {name: 'As photographed', note: 'The room as it is: sofa along the left wall facing the TV, a pouf in front of the window.',
     place: {sofa: [19, 62, 270], pouf: [75, 36, 0], stand: [136.5, 34, 90], tv: [143.5, 35, 90], curL: [15, 2, 0], curR: [130, 2, 0], rad: [65, 2.5, 0]}},
    {name: 'Sofa under the window', note: 'The sofa moves to the window wall and the pouf becomes a coffee table. It opens the left wall, but the sofa back covers the radiator.',
     place: {sofa: [75, 19.5, 0], pouf: [75, 62, 0], stand: [136.5, 34, 90], tv: [143.5, 35, 90], curL: [15, 2, 0], curR: [130, 2, 0], rad: [65, 2.5, 0]}}
  ],
  PHOTOS: [
    {src: 'photos/p1.jpg', label: 'Photo 1 · toward the window', at: [214, 117], h: 57, yaw: 302, pitch: -4, roll: 0, fov: 90},
    {src: 'photos/p2.jpg', label: 'Photo 2 · from the sofa', at: [5, 147], h: 30, yaw: 28, pitch: -10, roll: 0, fov: 90}
  ]
};
