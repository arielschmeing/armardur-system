package br.com.armardur.api.service.character;

import br.com.armardur.api.controller.request.ElementalRequest;
import br.com.armardur.api.domain.Character;
import br.com.armardur.api.domain.CharacterElemental;
import br.com.armardur.api.repository.CharacterElementalRepository;
import br.com.armardur.api.repository.CharacterRepository;
import br.com.armardur.api.validator.character.CharacterHasElementValidator;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AddCharacterElementalService {

    private final CharacterElementalRepository characterElementalRepository;
    private final SearchCharacterService searchCharacterService;
    private final CharacterRepository characterRepository;
    private final CharacterHasElementValidator characterHasElementValidator;

    @Transactional
    public void add(ElementalRequest request, Long id, HttpServletRequest httpRequest) {
        Character character = searchCharacterService.byIdIfHasPermission(id, httpRequest);

        characterHasElementValidator.validate(character.getElements(), request.name());

        CharacterElemental characterElemental = CharacterElemental.builder()
                .name(request.name())
                .isAffinity(request.name().is_affinity())
                .character(character)
                .build();

        characterElementalRepository.save(characterElemental);

        character.addElemental(characterElemental);

        characterRepository.save(character);
    }
}
