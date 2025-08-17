package br.com.armardur.api.service.character;

import br.com.armardur.api.controller.request.CharacterLevelRequest;
import br.com.armardur.api.domain.Character;
import br.com.armardur.api.repository.CharacterRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class UpdateCharacterLevelService {

    private final SearchCharacterService searchCharacterService;
    private final CharacterRepository characterRepository;

    @Transactional
    public void update(Long id, CharacterLevelRequest request, HttpServletRequest httpRequest) {
        Character character = searchCharacterService.byIdIfHasPermission(id, httpRequest);

        if(character.getLevel() == request.value()) {
            throw new ResponseStatusException(BAD_REQUEST, "Value is the same Character level.");
        }

        character.setLevel(request.value());

        characterRepository.save(character);
    }
}
