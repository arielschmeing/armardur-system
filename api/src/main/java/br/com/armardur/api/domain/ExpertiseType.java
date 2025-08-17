package br.com.armardur.api.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

import static br.com.armardur.api.domain.ModifierType.*;

@Getter
@AllArgsConstructor
public enum ExpertiseType {
    ACROBATICS("ACROBATICS", DEXTERITY),
    ANIMAL_HANDLING("ANIMAL_HANDLING", WISDOM),
    ARCANA("ARCANA", ELEMENTAL),
    ATHLETICS("ATHLETICS", STRENGTH),
    DECEPTION("DECEPTION", WISDOM),
    HISTORY("HISTORY", WISDOM),
    INSIGHT("INSIGHT", WISDOM),
    INTIMIDATION("INTIMIDATION", CHARISMA),
    INVESTIGATION("INVESTIGATION", MENTAL),
    MEDICINE("MEDICINE", WISDOM),
    NATURE("NATURE", ELEMENTAL),
    PERCEPTION("PERCEPTION", WISDOM),
    PERFORMANCE("PERFORMANCE", CHARISMA),
    PERSUASION("PERSUASION", CHARISMA),
    RELIGION("RELIGION", WISDOM),
    SLEIGHT_OF_HAND("SLEIGHT_OF_HAND", DEXTERITY),
    STEALTH("STEALTH", DEXTERITY),
    SURVIVAL("SURVIVAL", WISDOM);

    private final String label;
    private final ModifierType modifier;
}
