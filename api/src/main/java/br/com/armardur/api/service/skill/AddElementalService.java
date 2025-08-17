package br.com.armardur.api.service.skill;

import br.com.armardur.api.domain.Elemental;
import br.com.armardur.api.domain.Skill;
import br.com.armardur.api.domain.ElementalType;
import br.com.armardur.api.repository.ElementalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AddElementalService {

    private final ElementalRepository elementalRepository;

    @Transactional
    public Elemental add(Skill skill, ElementalType elementalType) {
        Elemental elemental = Elemental.builder()
                .skill(skill)
                .name(elementalType)
                .build();

        elementalRepository.save(elemental);

        return elemental;
    }
}
