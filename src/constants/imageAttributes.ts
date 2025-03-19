
const ACCESSORIES_MAP = {
    default: "None",
    flower: "Flower",
    earings: "Earings",
    glasses: "Glasses",
    headphone: "Headphone"
}

const HAIR_MAP = {
    default: "Default",
    bang: "Bang",
    curls: "Curls",
    elegant: "Elegant",
    fancy: "Fancy",
}

const EYES_MAP = {
    default: "Default",
    angry: "Angry",
    naughty: "Naughty",
    panda: "Panda",
    smart: "Smart",
    star: "Star",
}

const MOUTH_MAP = {
    default: "Default",
    astonished: "Astonished",
    eating: "Eating",
    laugh: "Laugh",
    tongue: "Tongue",
}

const LEG_MAP = {
    default: "Default",
    bubbleTea: "Bubble-tea",
    cookie: "Cookie",
    gameconsole: "Game-console",
    tiltForward: "Tilt-forward",
    tiltBackward: "Tilt-backward"
}

const EARS_MAP = {
    default: "Default",
    tiltBackward: "Tilt-backward",
    tiltForward: "Tilt-forward",
}

const NECK_MAP = {
    default: "Default",
    bendBackward: "Bend-backward",
    bendForward: "Bend-forward",
    thick: "Thick",
}
const BACKGROUND_MAP = {
    red50: "red50",
    red60: "red60",
    red70: "red70",
    yellow50: "yellow50",
    yellow60: "yellow60",
    yellow70: "yellow70",
    blue50: "blue50",
    blue60: "blue60",
    blue70: "blue70",
    green50: "green50",
    green60: "green60",
    green70: "green70",
    darkblue30: "darkblue30",
    darkblue50: "darkblue50",
    darkblue70: "darkblue70",
    white: "white",
    grey10: "grey10",
    grey20: "grey20",
    grey40: "grey40",
    grey70: "grey70",
    grey80: "grey80",
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
export const ATTRIBUTE_MAP = {
    [ATTRIBUTE_KEY_MAP.background]: {
        key: "background",
        text: "Background",
        values: Object.values(BACKGROUND_MAP)
    },
    [ATTRIBUTE_KEY_MAP.hair]: {
        key: "hair",
        text: "Hair",
        values: Object.values(HAIR_MAP),
    },
    [ATTRIBUTE_KEY_MAP.accessories]: {
        key: "accessories",
        text: "Accessories",
        values: Object.values(ACCESSORIES_MAP),
    },
    [ATTRIBUTE_KEY_MAP.leg]: {
        key: "leg",
        text: "Leg",
        values: Object.values(LEG_MAP),
    },
    [ATTRIBUTE_KEY_MAP.eyes]: {
        key: "eyes",
        text: "Eyes",
        values: Object.values(EYES_MAP),
    },
    [ATTRIBUTE_KEY_MAP.mouth]: {
        key: "mouth",
        text: "Mouth",
        values: Object.values(MOUTH_MAP),
    },
    [ATTRIBUTE_KEY_MAP.ears]: {
        key: "ears",
        text: "Ears",
        values: Object.values(EARS_MAP),
    },
    [ATTRIBUTE_KEY_MAP.neck]: {
        key: "neck",
        text: "Neck",
        values: Object.values(NECK_MAP),
    },
}

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