package br.com.armardur.api.controller.request;

import br.com.armardur.api.annotation.rangeAttribute.RangeAttribute;

public record CharacterLevelRequest(
        @RangeAttribute
        int value
) {}
