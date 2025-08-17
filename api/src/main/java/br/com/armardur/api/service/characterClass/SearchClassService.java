package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.repository.CharacterClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class SearchClassService {

    private final CharacterClassRepository characterClassRepository;

    public CharacterClass byId(Long id) {
        Optional<CharacterClass> optionalCharacterClass = characterClassRepository.findById(id);

        if(optionalCharacterClass.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "ID character class don't exists.");
        }

        return optionalCharacterClass.get();
    }
}
