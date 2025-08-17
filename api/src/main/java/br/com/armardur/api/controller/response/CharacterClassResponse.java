package br.com.armardur.api.controller.response;

import br.com.armardur.api.domain.ModifierType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder @AllArgsConstructor @NoArgsConstructor
public class CharacterClassResponse {

    private Long id;
    private int difficultClass;
    private String name;
    private String description;
    private int dieHealth;
    private int baseHealth;
    private ModifierType physicalMod;
    private ModifierType casterMod;
}
