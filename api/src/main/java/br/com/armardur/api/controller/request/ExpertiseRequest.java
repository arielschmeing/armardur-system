package br.com.armardur.api.controller.request;

import br.com.armardur.api.domain.ExpertiseType;
import jakarta.validation.constraints.NotNull;

public record ExpertiseRequest(
        @NotNull(message = "The name of the Expertise cannot be null.")
        ExpertiseType name
) {}
