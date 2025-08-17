package br.com.armardur.api.controller.request;

import br.com.armardur.api.annotation.enumSubtype.EnumSubtype;
import br.com.armardur.api.domain.ElementalType;
import br.com.armardur.api.domain.BranchType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.List;

public record SkillRequest(
        @NotBlank
        String name,

        @NotNull
        int level,

        @NotNull
        int range,

        @NotNull
        int duration,

        @NotNull
        int castTime,

        @NotBlank
        String description,

        @NotNull
        List<BranchType> branches,

        @NotNull
        List<@EnumSubtype(enumClass = ElementalType.class,
                anyOf = {"LUMINOS", "UMBRA", "VORTEXIS", "ASTRALITH", "AQUIS", "IGNIS", "UNRESTRICTED"})
        ElementalType> elements
) {}
