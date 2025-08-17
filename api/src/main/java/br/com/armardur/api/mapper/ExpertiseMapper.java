package br.com.armardur.api.mapper;

import br.com.armardur.api.controller.response.ExpertiseResponse;
import br.com.armardur.api.domain.Expertise;
import org.mapstruct.Mapper;

import static org.mapstruct.ReportingPolicy.ERROR;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ERROR)
public interface ExpertiseMapper {
    ExpertiseResponse toResponse(Expertise entity);
}
