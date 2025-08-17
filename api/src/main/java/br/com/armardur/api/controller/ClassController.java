package br.com.armardur.api.controller;

import br.com.armardur.api.controller.request.ClassRequest;
import br.com.armardur.api.controller.response.CharacterClassDetailResponse;
import br.com.armardur.api.controller.response.CharacterClassResponse;
import br.com.armardur.api.service.characterClass.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("/classes")
public class ClassController {

    private final AddClassService addClassService;
    private final ListClassesService listClassesService;
    private final DetailClassService detailClassService;
    private final BindSkillWithClassService bindSkillWithClassService;
    private final RemoveBindSkillInClassService removeBindSkillInClassService;

    @PreAuthorize("hasAnyAuthority('SCOPE_MODERATOR', 'SCOPE_ADMIN')")
    @PostMapping
    @ResponseStatus(CREATED)
    public void add(@Valid @RequestBody ClassRequest request) {
        addClassService.add(request);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping
    public List<CharacterClassResponse> list() {
        return listClassesService.list();
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping("/{id}")
    public CharacterClassDetailResponse detail(@PathVariable Long id) {
        return detailClassService.detail(id);
    }

    @PreAuthorize("hasAnyAuthority('SCOPE_MODERATOR', 'SCOPE_ADMIN')")
    @PutMapping("/{classId}/level/{level}/skill/{skillId}")
    @ResponseStatus(OK)
    public void bindSkill(@PathVariable Long classId, @PathVariable Long skillId, @PathVariable Integer level) {
        bindSkillWithClassService.bind(classId, skillId, level);
    }

    @PreAuthorize("hasAnyAuthority('SCOPE_MODERATOR', 'SCOPE_ADMIN')")
    @DeleteMapping("/{classId}/level/{level}/skill/{skillId}")
    public void removeBindSkill(@PathVariable Long classId, @PathVariable Long skillId, @PathVariable Integer level) {
        removeBindSkillInClassService.remove(classId, skillId, level);
    }
}
