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
@Table(name = "user_permission")
public class Permission {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Enumerated(STRING)
    private PermissionType role;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
