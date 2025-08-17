package br.com.armardur.api.validator.characterClass;

import br.com.armardur.api.repository.CharacterClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
@RequiredArgsConstructor
public class ClassNameExistsValidator {

    private final CharacterClassRepository characterClassRepository;

    public void validate(String name) {
        boolean exists = characterClassRepository.existsByName(name);

        if(exists) {
            throw new ResponseStatusException(BAD_REQUEST, "Character class with this name exists.");
        }
    }
}
