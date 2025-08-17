package br.com.armardur.api.controller.response;

import br.com.armardur.api.domain.ModifierType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import static jakarta.persistence.EnumType.STRING;

@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class ExpertiseResponse {

    @Enumerated(STRING)
    private ModifierType modifier;
    private String name;
}
