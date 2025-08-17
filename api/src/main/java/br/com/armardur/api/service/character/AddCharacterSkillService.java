package br.com.armardur.api.service.character;

import br.com.armardur.api.domain.Character;
import br.com.armardur.api.domain.Skill;
import br.com.armardur.api.repository.CharacterRepository;
import br.com.armardur.api.service.skill.SearchSkillService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class AddCharacterSkillService {

    private final SearchCharacterService searchCharacterService;
    private final SearchSkillService searchSkillService;
    private final CharacterRepository characterRepository;

    @Transactional
    public void add(Long charId, Long skillId, HttpServletRequest httpRequest) {
        Character character = searchCharacterService.byIdIfHasPermission(charId, httpRequest);
        Skill skill = searchSkillService.byId(skillId);

        if(character.getCharacterClass().getLevels().stream()
                .noneMatch(l -> l.getSkills().contains(skill))) {
            throw new ResponseStatusException(BAD_REQUEST, "Skill does not exist in Character levels");
        }

        if(character.getSkills().contains(skill)) {
            throw new ResponseStatusException(BAD_REQUEST, "Skill already exist in the Character.");
        }

        character.addSkill(skill);

        characterRepository.save(character);
    }
}
