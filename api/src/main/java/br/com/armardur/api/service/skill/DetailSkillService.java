package br.com.armardur.api.service.skill;

import br.com.armardur.api.controller.response.SkillResponse;
import br.com.armardur.api.domain.*;
import br.com.armardur.api.mapper.SkillMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DetailSkillService {

    private final SkillMapper skillMapper;

    public SkillResponse detail(Skill skill) {
        SkillResponse response = skillMapper.toResponse(skill);
        response.setBranches(branchesToName(skill.getBranches()));
        response.setElements(elementsToName(skill.getElements()));

        return response;
    }

    private List<ElementalType> elementsToName(List<Elemental> elements) {
        return elements.stream()
                .map(Elemental::getName)
                .toList();
    }

    private List<BranchType> branchesToName(List<Branch> branches) {
        return branches.stream()
                .map(Branch::getName)
                .toList();
    }
}
