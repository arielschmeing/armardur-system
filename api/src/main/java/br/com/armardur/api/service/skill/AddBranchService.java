package br.com.armardur.api.service.skill;

import br.com.armardur.api.domain.*;
import br.com.armardur.api.repository.BranchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AddBranchService {

    private final BranchRepository branchRepository;

    @Transactional
    public Branch add(Skill skill, BranchType branchType) {
        Branch branch = Branch.builder()
                .skill(skill)
                .name(branchType)
                .build();

        branchRepository.save(branch);

        return branch;
    }
}
