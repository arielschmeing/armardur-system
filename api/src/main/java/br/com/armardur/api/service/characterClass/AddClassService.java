package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.controller.request.ClassRequest;
import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.mapper.CharacterClassMapper;
import br.com.armardur.api.repository.CharacterClassRepository;
import br.com.armardur.api.validator.characterClass.ClassNameExistsValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class AddClassService {

    private static final int MAX_LEVEL = 20;
    private static final int MIN_LEVEL = 1;

    private final ClassNameExistsValidator classNameExistsValidator;
    private final CharacterClassRepository characterClassRepository;
    private final CharacterClassMapper characterClassMapper;
    private final AddClassLevelService addClassLevelService;

    @Transactional
    public void add(ClassRequest request) {
        classNameExistsValidator.validate(request.name());

        CharacterClass characterClass = characterClassMapper.toEntity(request);

        characterClassRepository.save(characterClass);

        IntStream.range(MIN_LEVEL, MAX_LEVEL + MIN_LEVEL)
                .forEach(index -> addClassLevelService.add(characterClass, index));

        characterClassRepository.save(characterClass);
    }
}
