package br.com.armardur.api.mapper;

import br.com.armardur.api.controller.response.ClassLevelResponse;
import br.com.armardur.api.domain.ClassLevel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import static org.mapstruct.ReportingPolicy.ERROR;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ERROR)
public interface ClassLevelMapper {

    @Mapping(target = "skills", ignore = true)
    ClassLevelResponse toResponse(ClassLevel entity);
}
