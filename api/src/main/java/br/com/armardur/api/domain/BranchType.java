package br.com.armardur.api.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum BranchType {
    AURA("AURA"),
    DEFENSE("DEFENSE"),
    FORTIFICATION("FORTIFICATION"),
    EMISSION("EMISSION"),
    TRANSMUTATION("TRANSMUTATION"),
    MANIPULATION("MANIPULATION"),
    SUPPORT("SUPPORT"),
    SPECIFIC("SPECIFIC");

    private final String label;
}
