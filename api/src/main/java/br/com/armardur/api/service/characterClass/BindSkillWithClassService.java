package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.domain.ClassLevel;
import br.com.armardur.api.domain.Skill;
import br.com.armardur.api.repository.ClassLevelRepository;
import br.com.armardur.api.service.classLevel.SearchLevelService;
import br.com.armardur.api.service.skill.SearchSkillService;
import br.com.armardur.api.validator.skill.SkillExistsInLevelValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BindSkillWithClassService {

    private final SearchClassService searchClassService;
    private final SearchSkillService searchSkillService;
    private final ClassLevelRepository classLevelRepository;
    private final SearchLevelService searchLevelService;
    private final SkillExistsInLevelValidator skillExistsInLevelValidator;

    @Transactional
    public void bind(Long classId, Long skillId, Integer level) {
        Skill skill = searchSkillService.byId(skillId);
        CharacterClass characterClass = searchClassService.byId(classId);

        ClassLevel classLevel = searchLevelService.byClass(characterClass, level);

        skillExistsInLevelValidator.validate(classLevel, skill);

        classLevel.addSkill(skill);

        classLevelRepository.save(classLevel);
    }
}
