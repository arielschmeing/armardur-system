package br.com.armardur.api.controller.request;

import br.com.armardur.api.domain.PermissionType;
import jakarta.validation.constraints.NotNull;

public record AddRoleRequest(@NotNull PermissionType role) {}
