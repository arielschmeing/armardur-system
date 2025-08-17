package br.com.armardur.api.controller.request;

import br.com.armardur.api.annotation.rangeAttribute.RangeAttribute;
import br.com.armardur.api.domain.RaceType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.Range;

import static jakarta.persistence.EnumType.STRING;

public record CharacterRequest(
        @NotBlank
        @Size(max = MAX_NAME_CHARS, min = MIN_NAME_CHARS, message = "Max characters to name is " + MAX_NAME_CHARS)
        String name,

        @NotBlank
        @Size(max = MAX_IMAGE_CHARS, min = MIN_IMAGE_CHARS, message = "Max characters to name is " + MAX_IMAGE_CHARS)
        String image,

        @NotNull
        @Range(max = MAX_HP, min = MIN_HP, message = "HP must be between " + MAX_HP + " and " + MIN_HP)
        int hp,

        @NotNull
        @Enumerated(STRING)
        RaceType race,

        @RangeAttribute
        int strength,

        @RangeAttribute
        int dexterity,

        @RangeAttribute
        int constitution,

        @RangeAttribute
        int mental,

        @RangeAttribute
        int wisdom,

        @RangeAttribute
        int charisma,

        @RangeAttribute
        int elemental
) {

    private static final int MAX_IMAGE_CHARS = 512;
    private static final int MIN_IMAGE_CHARS = 10;

    private static final int MAX_NAME_CHARS = 100;
    private static final int MIN_NAME_CHARS = 3;

    private static final int MAX_HP = 999;
    private static final int MIN_HP = 1;
}
