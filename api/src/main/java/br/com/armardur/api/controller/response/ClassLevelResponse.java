package br.com.armardur.api.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class ClassLevelResponse {

    private Long id;
    private int level;
    private int proficiency;
    private List<SkillResponse> skills;
}
