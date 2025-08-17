package br.com.armardur.api.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Data
@Builder @AllArgsConstructor @NoArgsConstructor
@Table(name = "user_account")
public class User {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String name;
    private String password;
    private String email;
    private LocalDateTime createdAt;
    private boolean active;

    @OneToMany(mappedBy = "user",
            cascade = ALL,
            fetch = EAGER
    )
    @Builder.Default
    private List<Permission> permissions = new ArrayList<>();

    @OneToMany(mappedBy = "user",
            cascade = ALL,
            fetch = EAGER
    )
    @Builder.Default
    private List<Character> characters = new ArrayList<>();

    public void addPermission(Permission permission) {
        this.permissions.add(permission);
        permission.setUser(this);
    }

    public void addCharacter(Character character) {
        this.characters.add(character);
    }
}
