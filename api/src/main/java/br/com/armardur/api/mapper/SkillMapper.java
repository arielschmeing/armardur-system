package br.com.armardur.api.mapper;

import br.com.armardur.api.controller.request.SkillRequest;
import br.com.armardur.api.controller.response.SkillResponse;
import br.com.armardur.api.domain.Skill;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import static org.mapstruct.ReportingPolicy.ERROR;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ERROR)
public interface SkillMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "branches", ignore = true)
    @Mapping(target = "elements", ignore = true)
    Skill toEntity(SkillRequest request);

    @Mapping(target = "branches", ignore = true)
    @Mapping(target = "elements", ignore = true)
    SkillResponse toResponse(Skill entity);
}
