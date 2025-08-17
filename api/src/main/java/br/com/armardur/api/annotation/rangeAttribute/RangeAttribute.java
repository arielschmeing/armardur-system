package br.com.armardur.api.annotation.rangeAttribute;

import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Range;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Documented
@Target(FIELD)
@NotNull
@Range(max = 20, min = 1, message = "Attribute must be between " + 20 + " and " + 1)
@Retention(RUNTIME)
public @interface RangeAttribute {}
