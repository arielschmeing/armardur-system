package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.domain.ClassLevel;
import br.com.armardur.api.domain.Skill;
import br.com.armardur.api.repository.ClassLevelRepository;
import br.com.armardur.api.service.classLevel.SearchLevelService;
import br.com.armardur.api.service.skill.SearchSkillService;
import br.com.armardur.api.validator.skill.SkillNoExistsInLevelValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RemoveBindSkillInClassService {

    private final SearchClassService searchClassService;
    private final SearchSkillService searchSkillService;
    private final SearchLevelService searchLevelService;
    private final SkillNoExistsInLevelValidator skillNoExistsInLevelValidator;
    private final ClassLevelRepository classLevelRepository;

    @Transactional
    public void remove(Long classId, Long skillId, Integer level) {

        CharacterClass characterClass = searchClassService.byId(classId);
        Skill skill = searchSkillService.byId(skillId);

        ClassLevel classLevel = searchLevelService.byClass(characterClass, level);

        skillNoExistsInLevelValidator.validate(classLevel, skill);

        classLevel.setSkills(classLevel.getSkills().stream()
                .filter(s -> !s.equals(skill))
                .collect(Collectors.toList()));

        classLevelRepository.save(classLevel);
    }
}
