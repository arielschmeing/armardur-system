package br.com.armardur.api.annotation.enumSubtype;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.TYPE_USE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Documented
@Constraint(validatedBy = EnumSubtypeValidator.class)
@Target({FIELD, TYPE_USE})
@Retention(RUNTIME)
public @interface EnumSubtype {

    Class<? extends Enum<?>> enumClass();

    String[] anyOf();

    String message() default "Invalid type value.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
