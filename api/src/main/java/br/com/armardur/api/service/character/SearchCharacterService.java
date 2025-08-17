package br.com.armardur.api.service.character;

import br.com.armardur.api.domain.Character;
import br.com.armardur.api.repository.CharacterRepository;
import br.com.armardur.api.validator.user.UserHasPermissionValidator;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class SearchCharacterService {

    private final CharacterRepository characterRepository;
    private final UserHasPermissionValidator userHasPermissionValidator;

    public Character byId(Long id) {
        Optional<Character> characterOptional = characterRepository.findById(id);

        if(characterOptional.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "Character does not exist.");
        }

        return characterOptional.get();
    }

    public Character byIdIfHasPermission(Long id, HttpServletRequest httpRequest) {
        Character character = this.byId(id);

        userHasPermissionValidator.validate(httpRequest, character.getUser().getId());

        return character;
    }
}
