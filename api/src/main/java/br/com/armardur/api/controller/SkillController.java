package br.com.armardur.api.controller;

import br.com.armardur.api.controller.request.SkillRequest;
import br.com.armardur.api.controller.response.SkillResponse;
import br.com.armardur.api.service.skill.AddSkillService;
import br.com.armardur.api.service.skill.ListSkillsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequiredArgsConstructor
@RequestMapping("/skills")
public class SkillController {

    private final AddSkillService addSkillService;
    private final ListSkillsService listSkillsServices;

    @PreAuthorize("hasAnyAuthority('SCOPE_MODERATOR', 'SCOPE_ADMIN')")
    @PostMapping
    @ResponseStatus(CREATED)
    public void add(@Valid @RequestBody SkillRequest request) {
        addSkillService.add(request);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping
    public List<SkillResponse> list() {
        return listSkillsServices.list();
    }
}
