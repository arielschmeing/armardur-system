import { Affinity } from "../enums/affinity.enum";
import { Element } from "../enums/element.enum";

export const ELEMENTS = {
    [Element.VORTEXIS]: [
        Affinity.SOUND, Affinity.MIST, Affinity.VACUUM
    ],
    [Element.AQUIS]: [
        Affinity.ACID, Affinity.ICE, Affinity.POISON
    ],
    [Element.ASTRALITH]: [
        Affinity.CRYSTAL, Affinity.DENDRO, Affinity.METAL
    ],
    [Element.IGNIS]: [
        Affinity.BUNSEN, Affinity.MAGMA, Affinity.LIGHTNING
    ],
    [Element.LUMINOS]: [],
    [Element.UMBRA]: []
}