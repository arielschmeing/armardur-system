package br.com.armardur.api.controller.request;

import br.com.armardur.api.annotation.enumSubtype.EnumSubtype;
import br.com.armardur.api.domain.ModifierType;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.Range;

public record ClassRequest(
        @Size(max = MAX_NAME_CHARS, message = "Max characters to name is " + MAX_NAME_CHARS)
        String name,

        @Size(max = MAX_DESCRIPTION_CHARS, message = "Max characters to description is " + MAX_DESCRIPTION_CHARS)
        String description,

        @EnumSubtype(enumClass = ModifierType.class,
            anyOf = {"DEXTERITY", "STRENGTH", "CONSTITUTION"})
        ModifierType physicalMod,

        @EnumSubtype(enumClass = ModifierType.class,
            anyOf = {"WISDOM", "ELEMENTAL", "CHARISMA", "MENTAL"})
        ModifierType casterMod,

        @Max(value = MAX_DIFFICULT_CLASS, message = "Difficult class cannot exceed " + MAX_DIFFICULT_CLASS)
        int difficultClass,

        @Range(max = MAX_DIE_HEALTH, min = MIN_DIE_HEALTH, message = "Die health must be between " + MIN_DIE_HEALTH + " and " + MAX_DIE_HEALTH)
        int dieHealth,

        @Range(max = MAX_BASE_HEALTH, min = MIN_BASE_HEALTH, message = "Base health must be between " + MIN_BASE_HEALTH + " and " + MAX_BASE_HEALTH)
        int baseHealth
) {

    private static final int MAX_NAME_CHARS = 50;
    private static final int MAX_DESCRIPTION_CHARS = 512;
    private static final int MAX_DIFFICULT_CLASS = 40;

    private static final int MAX_DIE_HEALTH = 20;
    private static final int MIN_DIE_HEALTH = 4;

    private static final int MAX_BASE_HEALTH = 40;
    private static final int MIN_BASE_HEALTH = 1;
}
