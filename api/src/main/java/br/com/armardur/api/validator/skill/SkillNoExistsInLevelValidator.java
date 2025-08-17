package br.com.armardur.api.validator.skill;

import br.com.armardur.api.domain.ClassLevel;
import br.com.armardur.api.domain.Skill;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
@RequiredArgsConstructor
public class SkillNoExistsInLevelValidator {

    public void validate(ClassLevel classLevel, Skill skill) {

        if(!classLevel.getSkills().contains(skill)) {
            throw new ResponseStatusException(BAD_REQUEST, "Skill does not exist in class level.");
        }
    }
}
