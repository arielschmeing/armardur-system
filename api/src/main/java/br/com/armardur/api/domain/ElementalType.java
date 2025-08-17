package br.com.armardur.api.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ElementalType {
    LUMINOS("LUMINOS", false),
    UMBRA("UMBRA", false),
    VORTEXIS("VORTEXIS", false),
    ASTRALITH("ASTRALITH", false),
    AQUIS("AQUIS", false),
    IGNIS("IGNIS", false),
    UNRESTRICTED("UNRESTRICTED", false),

    MIST("MIST", true),
    SOUND("SOUND", true),
    VACUUM("VACUUM", true),
    METAL("METAL", true),
    CRYSTAL("CRYSTAL", true),
    DENDRO("DENDRO", true),
    POISON("POISON", true),
    ACID("ACID", true),
    ICE("ICE", true),
    LIGHTNING("LIGHTNING", true),
    BUNSEN("BUNSEN", true),
    MAGMA("MAGMA", true);

    private final String label;
    private final boolean is_affinity;
}
