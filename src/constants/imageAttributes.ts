//create maps for 
const HAIR_MAP = {
    default: "default",
    bang: "bang",
    curls: "curls",
    elegant: "elegant",
    fancy: "fancy",
    quiff: "quiff"
}

//create an object of all attributes as keys
const ATTRIBUTE_KEY_MAP = {
    nose: "nose",
    mount: "mouth",
    neck: "neck",
    leg: "leg",
    hair: "hair",
    eyes: "eyes",
    ears: "ears",
    background: "background",
    accessories: "accessories"
}

// we need to export the atrtribute in an an objectg that can be itersated through 
export const ATTRIBUTE_MAP = {
  [ATTRIBUTE_KEY_MAP.hair]: {
    key: "hair",
    text: "Hair",
    values : Object.values(HAIR_MAP)
  }  
}