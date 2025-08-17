package br.com.armardur.api.controller.response;

import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@SuperBuilder @AllArgsConstructor @NoArgsConstructor
public class CharacterClassDetailResponse extends CharacterClassResponse {

    private List<ClassLevelResponse> levels;
}
