package br.com.armardur.api.validator.character;

import br.com.armardur.api.domain.CharacterElemental;
import br.com.armardur.api.domain.ElementalType;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class CharacterHasElementValidator {
    public void validate(List<CharacterElemental> elements, ElementalType name) {

        if(elements.stream().anyMatch(e -> e.getName().equals(name))) {
            throw new ResponseStatusException(BAD_REQUEST, "Character already has this element.");
        }
    }
}
