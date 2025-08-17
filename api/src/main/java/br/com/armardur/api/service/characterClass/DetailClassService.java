package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.controller.response.CharacterClassDetailResponse;
import br.com.armardur.api.controller.response.ClassLevelResponse;
import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.mapper.CharacterClassMapper;
import br.com.armardur.api.mapper.ClassLevelMapper;
import br.com.armardur.api.service.skill.DetailSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DetailClassService {

    private final SearchClassService searchClassService;
    private final CharacterClassMapper characterClassMapper;
    private final ClassLevelMapper classLevelMapper;
    private final DetailSkillService detailSkillService;

    public CharacterClassDetailResponse detail(Long id) {
        CharacterClass characterClass = searchClassService.byId(id);

        CharacterClassDetailResponse response = characterClassMapper.toDetailResponse(characterClass);
        response.setLevels(characterClass.getLevels().stream()
                .map(classLevel -> {
                    ClassLevelResponse levelResponse = classLevelMapper.toResponse(classLevel);

                    levelResponse.setSkills(classLevel.getSkills().stream()
                            .map(detailSkillService::detail)
                            .toList());

                    return levelResponse;
                })
                .toList());

        return response;
    }
}
