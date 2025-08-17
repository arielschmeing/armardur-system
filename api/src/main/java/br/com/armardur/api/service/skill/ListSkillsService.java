package br.com.armardur.api.service.skill;

import br.com.armardur.api.controller.response.SkillResponse;
import br.com.armardur.api.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ListSkillsService {

    private final SkillRepository skillRepository;
    private final DetailSkillService detailSkillService;

    public List<SkillResponse> list() {
        return skillRepository.findAll().stream()
                .map(detailSkillService::detail)
                .toList();
    }
}
