package br.com.armardur.api.service.character;

import br.com.armardur.api.controller.request.ElementalRequest;
import br.com.armardur.api.domain.Character;
import br.com.armardur.api.domain.CharacterElemental;
import br.com.armardur.api.repository.CharacterElementalRepository;
import br.com.armardur.api.repository.CharacterRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class RemoveCharacterElementalService {

    private final SearchCharacterService searchCharacterService;
    private final CharacterElementalRepository characterElementalRepository;
    private final CharacterRepository characterRepository;

    @Transactional
    public void remove(@Valid ElementalRequest request, Long id, HttpServletRequest httpRequest) {
        Character character = searchCharacterService.byIdIfHasPermission(id, httpRequest);

        Optional<CharacterElemental> elemental = character.getElements().stream()
                .filter(e -> e.getName().equals(request.name()))
                .findFirst();

        character.setElements(character.getElements().stream()
                .filter(e -> !e.getName().equals(request.name()))
                .collect(Collectors.toList()));

        if(elemental.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "Elemental does not exist in Character");
        }

        characterElementalRepository.delete(elemental.get());
        characterRepository.save(character);
    }
}
