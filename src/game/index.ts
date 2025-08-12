// List of hero types
type HeroClass =
    | "Crusader"
    | "Highwayman"
    | "Plague Doctor"
    | "Vestal"
    | "Hellion"
    | "Bounty Hunter"
    | "Leper"
    | "Occultist"
    | "Grave Robber"
    | "Jester"
    | "Houndmaster"
    | "Arbalest"
    | "Man-at-Arms"
    | "Antiquarian"
    | "Flagellant"
    | "Musketeer";

// Hero interface
interface Hero {
    name: string;
    class: HeroClass;
    maxHP: number;
    damage: string; // "min-max"
    dodge: number;
    speed: number;
    critChance: number; // %
    resistances: {
        stun: number;
        blight: number;
        bleed: number;
        disease: number;
        move: number;
        debuff: number;
    };
    abilities: string[];
}

// Heroes object
const heroes: Record<HeroClass, Hero> = {
    Crusader: {
        name: "Reynauld",
        class: "Crusader",
        maxHP: 33,
        damage: "6-12",
        dodge: 5,
        speed: 1,
        critChance: 5,
        resistances: { stun: 50, blight: 30, bleed: 40, disease: 30, move: 50, debuff: 40 },
        abilities: ["Smite", "Stunning Blow", "Zealous Accusation", "Holy Lance"],
    },
    Highwayman: {
        name: "Dismas",
        class: "Highwayman",
        maxHP: 23,
        damage: "5-10",
        dodge: 10,
        speed: 5,
        critChance: 7,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Open Vein", "Pistol Shot", "Duelist's Advance", "Point Blank Shot"],
    },
    "Plague Doctor": {
        name: "Paracelsus",
        class: "Plague Doctor",
        maxHP: 22,
        damage: "4-8",
        dodge: 7,
        speed: 4,
        critChance: 5,
        resistances: { stun: 60, blight: 90, bleed: 40, disease: 50, move: 40, debuff: 50 },
        abilities: ["Plague Grenade", "Blinding Gas", "Battlefield Medicine", "Noxious Blast"],
    },
    Vestal: {
        name: "Junia",
        class: "Vestal",
        maxHP: 24,
        damage: "4-8",
        dodge: 0,
        speed: 4,
        critChance: 2,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Judgement", "Divine Grace", "Divine Comfort", "Dazzling Light"],
    },
    Hellion: {
        name: "Boudica",
        class: "Hellion",
        maxHP: 26,
        damage: "6-12",
        dodge: 5,
        speed: 4,
        critChance: 6,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Wicked Hack", "Iron Swan", "If It Bleeds", "Breakthrough"],
    },
    "Bounty Hunter": {
        name: "Tardif",
        class: "Bounty Hunter",
        maxHP: 25,
        damage: "5-10",
        dodge: 5,
        speed: 5,
        critChance: 8,
        resistances: { stun: 50, blight: 30, bleed: 40, disease: 30, move: 50, debuff: 40 },
        abilities: ["Collect Bounty", "Mark for Death", "Come Hither", "Flashbang"],
    },
    Leper: {
        name: "Baldwin",
        class: "Leper",
        maxHP: 35,
        damage: "7-14",
        dodge: 0,
        speed: 2,
        critChance: 1,
        resistances: { stun: 50, blight: 30, bleed: 40, disease: 30, move: 50, debuff: 40 },
        abilities: ["Chop", "Hew", "Withstand", "Solemnity"],
    },
    Occultist: {
        name: "Alhazred",
        class: "Occultist",
        maxHP: 19,
        damage: "4-7",
        dodge: 10,
        speed: 3,
        critChance: 6,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Abyssal Artillery", "Wyrd Reconstruction", "Vulnerability Hex", "Weakening Curse"],
    },
    "Grave Robber": {
        name: "Audrey",
        class: "Grave Robber",
        maxHP: 20,
        damage: "5-10",
        dodge: 15,
        speed: 8,
        critChance: 8,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Pick to the Face", "Lunge", "Shadow Fade", "Thrown Dagger"],
    },
    Jester: {
        name: "The Jester",
        class: "Jester",
        maxHP: 19,
        damage: "4-8",
        dodge: 10,
        speed: 7,
        critChance: 7,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Slice Off", "Harvest", "Inspiring Tune", "Battle Ballad"],
    },
    Houndmaster: {
        name: "Wilbur",
        class: "Houndmaster",
        maxHP: 21,
        damage: "4-8",
        dodge: 10,
        speed: 6,
        critChance: 5,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Hound's Rush", "Target Whistle", "Cry Havoc", "Guard Dog"],
    },
    Arbalest: {
        name: "Arbalest",
        class: "Arbalest",
        maxHP: 27,
        damage: "4-8",
        dodge: 5,
        speed: 3,
        critChance: 6,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Sniper Shot", "Suppressing Fire", "Battlefield Bandage", "Bola"],
    },
    "Man-at-Arms": {
        name: "Barristan",
        class: "Man-at-Arms",
        maxHP: 31,
        damage: "5-10",
        dodge: 5,
        speed: 3,
        critChance: 5,
        resistances: { stun: 50, blight: 30, bleed: 40, disease: 30, move: 50, debuff: 40 },
        abilities: ["Crush", "Rampart", "Defender", "Bolster"],
    },
    Antiquarian: {
        name: "Bea",
        class: "Antiquarian",
        maxHP: 17,
        damage: "3-6",
        dodge: 10,
        speed: 5,
        critChance: 2,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Nervous Stab", "Festering Vapors", "Invigorating Vapors", "Protect Me"],
    },
    Flagellant: {
        name: "Valentino",
        class: "Flagellant",
        maxHP: 22,
        damage: "4-8",
        dodge: 0,
        speed: 5,
        critChance: 5,
        resistances: { stun: 60, blight: 50, bleed: 100, disease: 30, move: 50, debuff: 40 },
        abilities: ["Punish", "Rain of Sorrows", "Redeem", "Exsanguinate"],
    },
    Musketeer: {
        name: "Musketeer",
        class: "Musketeer",
        maxHP: 27,
        damage: "4-8",
        dodge: 5,
        speed: 3,
        critChance: 6,
        resistances: { stun: 40, blight: 30, bleed: 40, disease: 30, move: 40, debuff: 30 },
        abilities: ["Aimed Shot", "Suppressing Fire", "Patch Up", "Buckshot"],
    },
};

console.log(heroes)



class Hero {

    name: string
    constructor(name: string) {
        this.name = name
    }
}


const viking = new Hero('Stasya')
console.log(viking.name)

