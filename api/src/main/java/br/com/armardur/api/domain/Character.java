package br.com.armardur.api.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class Character {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(STRING)
    private RaceType race;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private CharacterClass characterClass;

    @OneToMany(mappedBy = "character",
            cascade = ALL,
            fetch = EAGER
    )
    @Builder.Default
    private List<Expertise> expertises = new ArrayList<>();

    @OneToMany(mappedBy = "character",
            cascade = ALL,
            fetch = EAGER
    )
    @Builder.Default
    private List<CharacterElemental> elements = new ArrayList<>();

    @ManyToMany(cascade = ALL,
            fetch = EAGER
    )
    @JoinTable(name = "character_skill",
            joinColumns = @JoinColumn(name = "character_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    @Builder.Default
    private List<Skill> skills = new ArrayList<>();

    private String name;
    private String image;
    private int level;
    private int hp;

    private int armorClass;
    private int strength;
    private int dexterity;
    private int constitution;
    private int mental;
    private int wisdom;
    private int charisma;
    private int elemental;

    public void addExpertise(Expertise expertise) {
        this.getExpertises().add(expertise);
    }

    public void addElemental(CharacterElemental characterElemental) {
        this.getElements().add(characterElemental);
    }

    public void addSkill(Skill skill) {
        this.getSkills().add(skill);
    }

    public void removeSkill(Skill skill) {
        this.getSkills().remove(skill);
    }
}
