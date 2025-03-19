//create maps for each accessory
const ACCESSORIES_MAP = {
    default: "",
    flower: "flower",
    earings: "earings",
    glasses: "glasses",
    headphones: "headphones"
}

const HAIR_MAP = {
    default: "default",
    bang: "bang",
    curls: "curls",
    elegant: "elegant",
    fancy: "fancy",
    quiff: "quiff"
}

const EYES_MAP = {
    default: "default",
    angry: "angry",
    naughty: "naughty",
    panda: "panda",
    smart: "smart",
    star: "star",
}

const MOUTH_MAP = {
    default: "default",
    astonished: "astonished",
    eating: "eating",
    laugh: "laugh",
    tongue: "tongue",
}

const LEG_MAP = {
    default: "",
    bubbleTea: "bubblke-tea",
    cookie: "cookie",
    gameconsole: "game-console",
    tiltForward: "tilt-forward",
    tiltBackward: "tilt-backward"
}

const EARS_MAP = {
    default: "default",
    tiltBackward: "tilt-backward",
    tiltForward: "tilt-forward",
}

const NECK_MAP = {
    default: "default",
    bendBackward: "bend-backward",
    bendForward: "bend-forward",
    thick: "thick",
}

//create an object of all attributes as keys
const ATTRIBUTE_KEY_MAP = {
    nose: "nose",
    mouth: "mouth",
    neck: "neck",
    leg: "leg",
    hair: "hair",
    eyes: "eyes",
    ears: "ears",
    background: "background",
    accessories: "accessories"
}

// we need to export the atrtribute in an an objectg that can be iterated through 
export const ATTRIBUTE_MAP = [
    {
        key: "hair",
        text: "Hair",
        values: Object.values(HAIR_MAP)
    },
    // [ATTRIBUTE_KEY_MAP.accessories]: {
    //     key: "accessories",
    //     text: "Accessories",
    //     values: Object.values(ACCESSORIES_MAP),
    //   },
    //   [ATTRIBUTE_KEY_MAP.leg]: {
    //     key: "leg",
    //     text: "Leg",
    //     values: Object.values(LEG_MAP),
    //   },
    //   [ATTRIBUTE_KEY_MAP.eyes]: {
    //     key: "eyes",
    //     text: "Eyes",
    //     values: Object.values(EYES_MAP),
    //   },
    //   [ATTRIBUTE_KEY_MAP.mouth]: {
    //     key: "mouth",
    //     text: "Mouth",
    //     values: Object.values(MOUTH_MAP),
    //   },
    //   [ATTRIBUTE_KEY_MAP.ears]: {
    //     key: "ears",
    //     text: "Ears",
    //     values: Object.values(EARS_MAP),
    //   },
    //   [ATTRIBUTE_KEY_MAP.neck]: {
    //     key: "neck",
    //     text: "Neck",
    //     values: Object.values(NECK_MAP),
    //   },
    ]

export const ATTRIBUTES = [
    ATTRIBUTE_KEY_MAP.hair,
    ATTRIBUTE_KEY_MAP.ears,
    ATTRIBUTE_KEY_MAP.eyes,
    ATTRIBUTE_KEY_MAP.mouth,
    ATTRIBUTE_KEY_MAP.neck,
    ATTRIBUTE_KEY_MAP.leg,
    ATTRIBUTE_KEY_MAP.accessories,
    ATTRIBUTE_KEY_MAP.background,
]