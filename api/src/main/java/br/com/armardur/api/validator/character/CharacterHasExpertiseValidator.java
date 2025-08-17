package br.com.armardur.api.validator.character;

import br.com.armardur.api.domain.Expertise;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class CharacterHasExpertiseValidator {

    public void validate(List<Expertise> expertises, String expertise) {
        if(expertises.stream().anyMatch(e -> e.getName().equals(expertise))) {
            throw new ResponseStatusException(BAD_REQUEST, "This expertise exists in the Character.");
        }
    }
}
