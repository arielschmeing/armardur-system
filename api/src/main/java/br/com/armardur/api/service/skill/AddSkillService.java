package br.com.armardur.api.service.skill;

import br.com.armardur.api.controller.request.SkillRequest;
import br.com.armardur.api.domain.Elemental;
import br.com.armardur.api.domain.Skill;
import br.com.armardur.api.domain.Branch;
import br.com.armardur.api.mapper.SkillMapper;
import br.com.armardur.api.validator.skill.SkillExistsValidator;
import br.com.armardur.api.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddSkillService {

    private final SkillRepository skillRepository;
    private final AddElementalService addElementalService;
    private final AddBranchService addBranchService;
    private final SkillExistsValidator skillExistsValidator;
    private final SkillMapper skillMapper;

    @Transactional
    public void add(SkillRequest request) {
        skillExistsValidator.validate(request.name());

        Skill skill = skillMapper.toEntity(request);

        skillRepository.save(skill);

        List<Elemental> elements = request.elements().stream()
                .map(e -> addElementalService.add(skill, e))
                .toList();

        List<Branch> branches = request.branches().stream()
                .map(b -> addBranchService.add(skill, b))
                .toList();

        skill.addElement(elements);
        skill.addBranch(branches);

        skillRepository.save(skill);
    }
}
