package br.com.armardur.api.controller.response;

import br.com.armardur.api.domain.ElementalType;
import br.com.armardur.api.domain.BranchType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class SkillResponse {

    private Long id;
    private String name;
    private int range;
    private int castTime;
    private int duration;
    private int level;
    private String description;
    private List<BranchType> branches;
    private List<ElementalType> elements;
}
