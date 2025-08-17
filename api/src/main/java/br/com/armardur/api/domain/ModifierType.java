package br.com.armardur.api.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ModifierType {
    DEXTERITY("DEXTERITY"),
    STRENGTH("STRENGTH"),
    CONSTITUTION("CONSTITUTION"),
    WISDOM("WISDOM"),
    ELEMENTAL("ELEMENTAL"),
    CHARISMA("CHARISMA"),
    MENTAL("MENTAL");

    private final String label;
}
