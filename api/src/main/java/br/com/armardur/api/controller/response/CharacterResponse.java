package br.com.armardur.api.controller.response;

import br.com.armardur.api.domain.RaceType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import static jakarta.persistence.EnumType.STRING;

@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class CharacterResponse {

    private Long id;
    private String name;
    private String image;
    private Long userId;
    private int hp;
    private int level;

    private List<ExpertiseResponse> expertises;
    private List<CharacterElementalResponse> elements;
    private List<SkillResponse> skills;

    @Enumerated(STRING)
    private RaceType race;

    private int armorClass;
    private CharacterClassResponse characterClass;

    private int strength;
    private int dexterity;
    private int constitution;
    private int mental;
    private int wisdom;
    private int charisma;
    private int elemental;
}
