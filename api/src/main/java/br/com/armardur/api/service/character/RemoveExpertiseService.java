package br.com.armardur.api.service.character;

import br.com.armardur.api.controller.request.ExpertiseRequest;
import br.com.armardur.api.domain.Character;
import br.com.armardur.api.domain.Expertise;
import br.com.armardur.api.repository.CharacterRepository;
import br.com.armardur.api.repository.ExpertiseRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class RemoveExpertiseService {

    private final SearchCharacterService searchCharacterService;
    private final ExpertiseRepository expertiseRepository;
    private final CharacterRepository characterRepository;

    @Transactional
    public void remove(ExpertiseRequest request, Long id, HttpServletRequest httpRequest) {
        Character character = searchCharacterService.byIdIfHasPermission(id, httpRequest);

        Optional<Expertise> expertise = character.getExpertises().stream()
                .filter(e -> e.getName().equals(request.name().getLabel()))
                .findFirst();

        character.setExpertises(character.getExpertises().stream()
                .filter(e -> !e.getName().equals(request.name().getLabel()))
                .collect(Collectors.toList()));

        if(expertise.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "Expertise does not exist in Character.");
        }

        expertiseRepository.delete(expertise.get());
        characterRepository.save(character);
    }
}
