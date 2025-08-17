package br.com.armardur.api.controller.request;

import br.com.armardur.api.domain.ElementalType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;

import static jakarta.persistence.EnumType.STRING;

public record ElementalRequest(
    @NotNull(message = "Name cannot be null.")
    @Enumerated(STRING)
    ElementalType name
) {}
