package br.com.armardur.api.service.classLevel;

import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.domain.ClassLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class SearchLevelService {

    public ClassLevel byClass(CharacterClass characterClass, Integer level) {
        Optional<ClassLevel> optionalLevel = characterClass.getLevels().stream()
                .filter(l -> l.getLevel().equals(level))
                .findAny();

        if(optionalLevel.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "Level does not exist.");
        }

        return optionalLevel.get();
    }
}
