var CONFIG = {
  title: 'Flat 3D',
  subtitle: 'Main room, kitchen and hall, built from phone photos · sizes estimated, see “Estimates”',
  storageKey: 'flat-main-room-kitchen-v1',
  accent: 0x1f4fd8, fill: 0xa6c0f6,
  view: 'se', look: 'colour',
  TEXTURES: 'textures/',
  PALETTE: {
    paint: [['Textured wallpaper', 0xd8d2c6], ['Warm white', 0xf4f1ea], ['Pale sage', 0xdfe4d8], ['Dusty blue', 0x9db2c4], ['Charcoal', 0x3e3f3d], ['Gloss white', 0xf2f2f0], ['Gloss black', 0x16161a]],
    wood: [['Light oak laminate', 0xd3b184], ['Dark brown laminate', 0x5b3b2a], ['Pale oak', 0xd8bb93], ['Walnut', 0x8a6443], ['Black gloss', 0x1b1b1d]],
    fabric: [['Sage grey', 0x93a39e], ['Charcoal waffle', 0x4a4c55], ['Teal', 0x2a9bb0], ['Linen', 0xe9dfcc], ['Terracotta', 0xd6aa98]]
  },
  LOOKS: [
    {name: 'As photographed', colors: {}},
    {name: 'Warm white walls', colors: {walls: 0xf4f1ea, trim: 0xf4f1ea}},
    {name: 'Dusty blue walls', colors: {walls: 0x9db2c4, trim: 0xf4f1ea}}
  ],
  ROOM: {
    /* Plan: the window wall is the top wall, the sofa wall the left one, the kitchen to the right. Inner wall faces, clockwise from the top-left corner.
       The notch (145,0)-(145,73)-(150,73)-(150,0) is the 5″ wall between the main room and the kitchen: the TV hangs on its left face.
       The recess (177,157)-(177,161)-(207,161)-(207,157) is the fridge niche: the fridge stands in line with the units along the south wall, at their end nearest the entrance.
       The hall runs south from the gap between the two rooms: its east wall is x 177, the sliding wardrobe stands on its west side (x 101-125) and the front door is in the south wall. */
    outline: [[0, 0], [145, 0], [145, 73], [150, 73], [150, 0], [280, 0], [280, 157], [207, 157], [207, 161], [177, 161], [177, 285], [101, 285], [101, 165], [0, 165]],
    height: 98, wall: 5,
    walls: 0xd8d2c6, floor: 0xd3b184, trim: 0xd9c7ab,
    boards: 7, boardsDir: 'y',
    openings: [
      /* main room: window, then a glazed balcony door shown closed (the engine's door is always an open solid leaf, so it is a floor-to-head glazed opening) */
      {type: 'window', c: [68, 0], width: 60, sill: 30, head: 88, panes: 2},
      {type: 'window', c: [116, 0], width: 30, sill: 0, head: 80, panes: 1},
      /* kitchen: window and glazed balcony door on the same wall */
      {type: 'window', c: [201, 0], width: 30, sill: 33, head: 80, panes: 1},
      {type: 'window', c: [233, 0], width: 28, sill: 0, head: 80, panes: 1}
    ],
    fixed: [],
    verify: [
      'Ceiling height 98″ (2.5 m): assumed. The kitchen has a stepped, wavy suspended ceiling with spot lights that is not modelled',
      'Main room 145″ wide (3.7 m): solved from two photos, ±6″. Its depth, 165″, is a placeholder: the near wall is in no photo',
      'Wall between the main room and the kitchen: 73″ long, 5″ thick; the opening from 73″ to 157″ is 84″ wide',
      'Kitchen about 130″ × 157″ (3.3 × 4.0 m): read from photos with no camera solve, ±15 %. Its far wall at x 280″ is the least certain number here',
      'Main room window 60″ wide, glazed balcony door 30″ beside it (hinges on the right seen from the room, opens inward; drawn closed)',
      'Kitchen window 30″ and glazed balcony door 28″: the balcony is shared with the main room, so they sit on the same wall (guess)',
      'Kitchen units form an L (checked against the owner’s corrections and three photos, ±10″): along the east wall an oven and microwave tower 24″ and base units 107″; a 26″ corner unit with the sink in the south-east corner; a 49″ run along the south wall; wall cabinets 107″ and 49″ hung at 54″. The 28″ × 28″ × 76″ fridge stands in line with the south run, on its end nearest the entrance, facing north, in a 4″ recess in the wall',
      'The wall between the counter and the wall cabinets is mirrored: drawn as plain silvered mirrors 18″ high, without the smoked-bronze tint and diamond pattern. Counter top, hob, handles and the cat are not drawn; the dark floor band is a flat brown patch',
      'Left out in the main room: ceiling spot lights, the wardrobe at the left edge of photo 1, bags, laptop, sheer curtain. Curtains and radiators are plain boxes',
      'Hall (from five photos, no camera solve, ±15 %): 47″ clear width between x 125″ and 172″, about 10 ft from the gap between the rooms to the front door. Its length and the position of the interior door at y 225″ are guesses; which room that door leads to is unknown',
      'Hall furniture: sliding wardrobe 100″ × 24″ × 94″ with the curved open shelves at its near end drawn as a square 24″ × 16″ unit; front door 36″ and interior door 28″ drawn as closed flat panels; the shoe rack. The mirror inserts, ceiling lights and the intercom are not modelled',
      'Wall colour is one textured-wallpaper beige for both rooms; the kitchen’s black-flecked cork wallpaper is not modelled'
    ]
  },
  ITEMS: {
    sofa:   {name: 'Sofa', type: 'sofa', w: 88, d: 38, h: 32, color: 0x93a39e, color2: 0x4a4c55},
    pouf:   {name: 'Pouf', type: 'ottoman', w: 44, d: 30, h: 17, color: 0x9fb0ac, color2: 0xd8bb93},
    stand:  {name: 'TV console', type: 'media', w: 52, d: 17, h: 19, color: 0x1b1b1d},
    tv:     {name: 'TV 50″', type: 'media', w: 44, d: 3, h: 25, tv: 50, mount: 28, color: 0x1b1b1d},
    curL:   {name: 'Curtain left', type: 'box', w: 30, d: 3, h: 96, color: 0x2a9bb0},
    curR:   {name: 'Curtain right', type: 'box', w: 30, d: 3, h: 96, color: 0x2a9bb0},
    rad:    {name: 'Radiator', type: 'box', w: 50, d: 4, h: 21, color: 0xf4f1ea},
    floorK: {name: 'Dark floor patch', type: 'rug', w: 54, d: 131, color: 0x5b3b2a, color2: 0x5b3b2a},
    tower:  {name: 'Oven tower', type: 'box', w: 24, d: 24, h: 84, color: 0xe4e4e2},
    base:   {name: 'Base units', type: 'box', w: 107, d: 24, h: 36, color: 0x16161a},
    leg2:   {name: 'South run', type: 'box', w: 49, d: 26, h: 36, color: 0x16161a},
    corner: {name: 'Corner unit', type: 'box', w: 26, d: 26, h: 36, color: 0x16161a},
    sink:   {name: 'Sink', type: 'box', w: 18, d: 14, h: 1.5, mount: 36, color: 0x9aa0a6},
    wall:   {name: 'Wall cabinets east', type: 'box', w: 107, d: 14, h: 30, mount: 54, color: 0xf2f2f0},
    wall2:  {name: 'Wall cabinets south', type: 'box', w: 49, d: 14, h: 30, mount: 54, color: 0xf2f2f0},
    mirror: {name: 'Mirror splash-back east', type: 'art', w: 107, d: 1.5, h: 18, mount: 36, print: 'mirror', color: 0x2b2b2b},
    mirror2: {name: 'Mirror splash-back south', type: 'art', w: 49, d: 1.5, h: 18, mount: 36, print: 'mirror', color: 0x2b2b2b},
    fridge: {name: 'Fridge', type: 'box', w: 28, d: 28, h: 76, color: 0x16161a},
    table:  {name: 'Round table', type: 'table', w: 40, d: 40, h: 29, round: true, color: 0x1b1b1d, color2: 0x1b1b1d},
    ch1:    {name: 'Chair 1', type: 'chair', w: 18, d: 18, h: 34, color: 0x1b1b1d},
    ch2:    {name: 'Chair 2', type: 'chair', w: 18, d: 18, h: 34, color: 0x1b1b1d},
    ch3:    {name: 'Chair 3', type: 'chair', w: 18, d: 18, h: 34, color: 0x1b1b1d},
    ch4:    {name: 'Chair 4', type: 'chair', w: 18, d: 18, h: 34, color: 0x1b1b1d},
    hallWard: {name: 'Hall wardrobe', type: 'wardrobe', w: 100, d: 24, h: 94, color: 0x2a1f1c},
    endcap:   {name: 'Wardrobe end shelves', type: 'bookshelf', w: 24, d: 16, h: 94, color: 0x3a2a24},
    doorFront: {name: 'Front door', type: 'box', w: 36, d: 2, h: 80, color: 0x7a4a2c},
    doorInner: {name: 'Hall door', type: 'box', w: 28, d: 2, h: 80, color: 0x8b7358},
    shoes:    {name: 'Shoe rack', type: 'box', w: 14, d: 18, h: 26, color: 0x4a2f22},
    radK:   {name: 'Kitchen radiator', type: 'box', w: 24, d: 4, h: 24, color: 0xf4f1ea}
  },
  LAYOUTS: [
    {name: 'As photographed', note: 'The flat as it is: sofa along the left wall facing the TV, a pouf in front of the window, the kitchen beyond the 84″ opening.',
     place: {sofa: [19, 62, 270], pouf: [75, 36, 0], stand: [136.5, 34, 90], tv: [143.5, 35, 90], curL: [15, 2, 0], curR: [130, 2, 0], rad: [65, 2.5, 0],
             floorK: [227, 65.5, 0], tower: [268, 12, 90], base: [268, 77.5, 90], corner: [267, 144, 90], leg2: [229.5, 144, 180], wall: [273, 77.5, 90], wall2: [229.5, 150, 180], mirror: [279.25, 77.5, 90], mirror2: [229.5, 156.25, 180], sink: [273, 144, 90], fridge: [191, 145, 180],
             table: [190, 62, 0], ch1: [164, 39, 311], ch2: [222, 62, 90], ch3: [190, 94, 180], ch4: [160, 70, 270], radK: [190, 2.5, 0],
             hallWard: [113, 231, 270], endcap: [113, 173, 180], doorFront: [150, 284, 180], doorInner: [176, 225, 90], shoes: [168, 268, 90]}},
    {name: 'Sofa under the window', note: 'The sofa moves to the window wall and the pouf becomes a coffee table. It opens the left wall, but the sofa back covers the radiator.',
     place: {sofa: [75, 19.5, 0], pouf: [75, 62, 0], stand: [136.5, 34, 90], tv: [143.5, 35, 90], curL: [15, 2, 0], curR: [130, 2, 0], rad: [65, 2.5, 0],
             floorK: [227, 65.5, 0], tower: [268, 12, 90], base: [268, 77.5, 90], corner: [267, 144, 90], leg2: [229.5, 144, 180], wall: [273, 77.5, 90], wall2: [229.5, 150, 180], mirror: [279.25, 77.5, 90], mirror2: [229.5, 156.25, 180], sink: [273, 144, 90], fridge: [191, 145, 180],
             table: [190, 62, 0], ch1: [164, 39, 311], ch2: [222, 62, 90], ch3: [190, 94, 180], ch4: [160, 70, 270], radK: [190, 2.5, 0],
             hallWard: [113, 231, 270], endcap: [113, 173, 180], doorFront: [150, 284, 180], doorInner: [176, 225, 90], shoes: [168, 268, 90]}}
  ],
  PHOTOS: [
    {src: 'photos/p1.jpg', label: 'Main room · toward the window', at: [141, 127], h: 64, yaw: 318.6, pitch: -8, roll: 0, fov: 102.7},
    {src: 'photos/p2.jpg', label: 'Main room · from the sofa', at: [5, 147], h: 30, yaw: 28, pitch: -10, roll: 0, fov: 90},
    {src: 'photos/k1.jpg', label: 'Kitchen · through the opening', at: [15, 118], h: 55, yaw: 90, pitch: -5, roll: 0, fov: 72},
    {src: 'photos/h1.jpg', label: 'Hall · toward the front door', at: [147, 178], h: 58, yaw: 180, pitch: -3, roll: 0, fov: 100},
    {src: 'photos/h4.jpg', label: 'Hall · toward the rooms', at: [150, 268], h: 58, yaw: 0, pitch: 0, roll: 0, fov: 100},
    {src: 'photos/k2.jpg', label: 'Kitchen · toward the window', at: [205, 148], h: 55, yaw: 0, pitch: -8, roll: 0, fov: 90}
  ]
};
