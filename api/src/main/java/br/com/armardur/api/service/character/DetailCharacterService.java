package br.com.armardur.api.service.character;

import br.com.armardur.api.controller.response.CharacterElementalResponse;
import br.com.armardur.api.controller.response.CharacterResponse;
import br.com.armardur.api.domain.Character;
import br.com.armardur.api.mapper.CharacterMapper;
import br.com.armardur.api.mapper.ExpertiseMapper;
import br.com.armardur.api.service.characterClass.DetailClassService;
import br.com.armardur.api.service.skill.DetailSkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DetailCharacterService {

    private final SearchCharacterService searchCharacterService;
    private final CharacterMapper characterMapper;
    private final DetailClassService detailClassService;
    private final ExpertiseMapper expertiseMapper;
    private final DetailSkillService detailSkillService;

    public CharacterResponse detail(Long id) {
        Character character = searchCharacterService.byId(id);

        CharacterResponse response = characterMapper.toResponse(character);

        response.setCharacterClass(detailClassService.detail(character.getCharacterClass().getId()));

        response.setExpertises(character.getExpertises().stream()
                .map(expertiseMapper::toResponse)
                .toList());

        response.setElements(character.getElements().stream()
                .map(e -> CharacterElementalResponse.builder()
                        .name(e.getName())
                        .isAffinity(e.isAffinity())
                        .build())
                .toList());

        response.setSkills(character.getSkills().stream()
                .map(detailSkillService::detail)
                .toList());
        
        response.setUserId(character.getUser().getId());

        return response;
    }
}
