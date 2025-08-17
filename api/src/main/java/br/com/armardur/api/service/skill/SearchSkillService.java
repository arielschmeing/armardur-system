package br.com.armardur.api.service.skill;

import br.com.armardur.api.domain.Skill;
import br.com.armardur.api.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class SearchSkillService {

    private final SkillRepository skillRepository;

    public Skill byId(Long id) {
        Optional<Skill> optionalSkill = skillRepository.findById(id);

        if(optionalSkill.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "Skill ID does not exist.");
        }

        return optionalSkill.get();
    }
}
