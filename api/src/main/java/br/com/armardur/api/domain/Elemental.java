package br.com.armardur.api.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class Elemental {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Enumerated(STRING)
    private ElementalType name;

    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;
}
