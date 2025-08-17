package br.com.armardur.api.service.character;

import br.com.armardur.api.controller.request.ExpertiseRequest;
import br.com.armardur.api.controller.response.ExpertiseResponse;
import br.com.armardur.api.domain.Character;
import br.com.armardur.api.domain.Expertise;
import br.com.armardur.api.mapper.ExpertiseMapper;
import br.com.armardur.api.repository.CharacterRepository;
import br.com.armardur.api.repository.ExpertiseRepository;
import br.com.armardur.api.validator.character.CharacterHasExpertiseValidator;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AddExpertiseService {

    private final SearchCharacterService searchCharacterService;
    private final ExpertiseRepository expertiseRepository;
    private final CharacterRepository characterRepository;
    private final CharacterHasExpertiseValidator characterHasExpertiseValidator;
    private final ExpertiseMapper expertiseMapper;

    @Transactional
    public ExpertiseResponse add(ExpertiseRequest request, Long id, HttpServletRequest httpRequest) {
        Character character = searchCharacterService.byIdIfHasPermission(id, httpRequest);

        characterHasExpertiseValidator.validate(character.getExpertises(), request.name().getLabel());

        Expertise expertise = Expertise.builder()
                .name(request.name().getLabel())
                .modifier(request.name().getModifier())
                .build();

        expertise.setCharacter(character);

        expertiseRepository.save(expertise);

        character.addExpertise(expertise);

        characterRepository.save(character);

        return expertiseMapper.toResponse(expertise);
    }
}
