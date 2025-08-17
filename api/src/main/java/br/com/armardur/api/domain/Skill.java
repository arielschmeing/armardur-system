package br.com.armardur.api.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class Skill {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String name;
    private int range;
    private int castTime;
    private int duration;
    private int level;
    private String description;

    @OneToMany(mappedBy = "skill",
            cascade = ALL,
            fetch = EAGER
    )
    @Builder.Default
    private List<Branch> branches = new ArrayList<>();

    @OneToMany(mappedBy = "skill",
            cascade = ALL,
            fetch = EAGER
    )
    @Builder.Default
    private List<Elemental> elements = new ArrayList<>();

    public void addBranch(List<Branch> branchList) {
        this.branches.addAll(branchList);
    }

    public void addElement(List<Elemental> elementalList) {
        this.elements.addAll(elementalList);
    }
}
