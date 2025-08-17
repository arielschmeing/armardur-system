package br.com.armardur.api.controller.request;

import jakarta.validation.constraints.NotBlank;

public record ChangeUserPasswordRequest(@NotBlank String password) {}
