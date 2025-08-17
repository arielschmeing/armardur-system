package br.com.armardur.api.controller;

import br.com.armardur.api.controller.request.*;
import br.com.armardur.api.controller.response.CharacterResponse;
import br.com.armardur.api.controller.response.ExpertiseResponse;
import br.com.armardur.api.service.character.*;
import br.com.armardur.api.service.characterClass.CreateCharacterService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("/characters")
public class CharacterController {

    private final CreateCharacterService createCharacterService;
    private final ListCharactersService listCharactersService;
    private final DetailCharacterService detailCharacterService;
    private final AddExpertiseService addExpertiseService;
    private final AddCharacterElementalService addCharacterElementalService;
    private final RemoveExpertiseService removeExpertiseService;
    private final RemoveCharacterElementalService removeCharacterElementalService;
    private final AddCharacterSkillService addCharacterSkillService;
    private final RemoveCharacterSkillService removeCharacterSkillService;
    private final UpdateCharacterLevelService updateCharacterLevelService;

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PostMapping("/class/{classId}")
    @ResponseStatus(CREATED)
    public void create(@Valid @RequestBody CharacterRequest request,
                       @PathVariable Long classId,
                       HttpServletRequest httpRequest) {
        createCharacterService.create(request, httpRequest, classId);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping
    public List<CharacterResponse> list() {
        return listCharactersService.list();
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping("/{id}")
    public CharacterResponse detail(@PathVariable Long id) {
        return detailCharacterService.detail(id);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PutMapping("/{id}/expertise")
    @ResponseStatus(OK)
    public ExpertiseResponse addExpertise(@Valid @RequestBody ExpertiseRequest request,
                                          @PathVariable Long id,
                                          HttpServletRequest httpRequest) {
        return addExpertiseService.add(request, id, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @DeleteMapping("/{id}/expertise")
    @ResponseStatus(OK)
    public void removeExpertise(@Valid @RequestBody ExpertiseRequest request,
                                @PathVariable Long id,
                                HttpServletRequest httpRequest) {
        removeExpertiseService.remove(request, id, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PutMapping("/{id}/element")
    @ResponseStatus(OK)
    public void addElement(@Valid @RequestBody ElementalRequest request,
                           @PathVariable Long id,
                           HttpServletRequest httpRequest) {
        addCharacterElementalService.add(request, id, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @DeleteMapping("/{id}/element")
    @ResponseStatus(OK)
    public void removeElement(@Valid @RequestBody ElementalRequest request,
                              @PathVariable Long id,
                              HttpServletRequest httpRequest) {
        removeCharacterElementalService.remove(request, id, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PutMapping("/{charId}/skill/{skillId}")
    @ResponseStatus(OK)
    public void addSkill(@PathVariable Long charId,
                         @PathVariable Long skillId,
                         HttpServletRequest httpRequest) {
        addCharacterSkillService.add(charId, skillId, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @DeleteMapping("/{charId}/skill/{skillId}")
    @ResponseStatus(OK)
    public void removeSkill(@PathVariable Long charId,
                            @PathVariable Long skillId,
                            HttpServletRequest httpRequest) {
        removeCharacterSkillService.remove(charId, skillId, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PutMapping("/{id}/update/level")
    @ResponseStatus(OK)
    public void updateLevel(@Valid @RequestBody CharacterLevelRequest request,
                            @PathVariable Long id,
                            HttpServletRequest httpRequest) {
        updateCharacterLevelService.update(id, request, httpRequest);
    }
}