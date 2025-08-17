package br.com.armardur.api.validator.skill;

import br.com.armardur.api.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
@RequiredArgsConstructor
public class SkillExistsValidator {

    private final SkillRepository skillRepository;

    public void validate(String name) {
        boolean exists = skillRepository.existsByName(name);

        if(exists) {
            throw new ResponseStatusException(BAD_REQUEST, "Skill already exists.");
        }
    }
}
