package br.com.armardur.api.annotation.enumSubtype;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.Set;

public class EnumSubtypeValidator implements ConstraintValidator<EnumSubtype, Enum<?>> {

    private Set<String> acceptedValues;
    private Class<? extends Enum<?>> enumClass;

    @Override
    public void initialize(EnumSubtype annotation) {
        this.enumClass = annotation.enumClass();
        this.acceptedValues = Set.of(annotation.anyOf());
    }

    @Override
    public boolean isValid(Enum<?> value, ConstraintValidatorContext context) {
        if (value == null) return true;
        return value.getClass() == enumClass && acceptedValues.contains(value.name());
    }
}
