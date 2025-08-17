package br.com.armardur.api.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class CharacterClass {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private int difficultClass;
    private String name;
    private String description;
    private int dieHealth;
    private int baseHealth;
    private String physicalMod;
    private String casterMod;

    @OneToMany(mappedBy = "characterClass",
            fetch = LAZY,
            cascade = ALL)
    @Builder.Default
    private List<ClassLevel> levels = new ArrayList<>();

    public void addLevel(ClassLevel classLevel) {
        this.levels.add(classLevel);
    }
}
