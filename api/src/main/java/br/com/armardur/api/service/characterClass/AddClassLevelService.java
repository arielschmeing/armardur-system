package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.domain.ClassLevel;
import br.com.armardur.api.repository.CharacterClassRepository;
import br.com.armardur.api.repository.ClassLevelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AddClassLevelService {

    private static final int MIN_PROFICIENCY = 2;

    private final ClassLevelRepository classLevelRepository;
    private final CharacterClassRepository characterClassRepository;

    @Transactional
    public void add(CharacterClass characterClass, int level) {

        ClassLevel classLevel = ClassLevel.builder()
                .level(level)
                .proficiency(calculateProficiency(level))
                .characterClass(characterClass)
                .build();

        classLevelRepository.save(classLevel);

        characterClass.addLevel(classLevel);

        characterClassRepository.save(characterClass);
    }

    private int calculateProficiency(int level) {
        return MIN_PROFICIENCY + Math.floorDiv((level - 1), 4);
    }
}
