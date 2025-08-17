package br.com.armardur.api.controller.request;

import jakarta.validation.constraints.NotBlank;

public record ChangeUserNameRequest(@NotBlank String name) {}
