package br.com.armardur.api.mapper;

import br.com.armardur.api.controller.request.ClassRequest;
import br.com.armardur.api.controller.response.CharacterClassDetailResponse;
import br.com.armardur.api.controller.response.CharacterClassResponse;
import br.com.armardur.api.domain.CharacterClass;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import static org.mapstruct.ReportingPolicy.ERROR;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ERROR)
public interface CharacterClassMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "levels", ignore = true)
    CharacterClass toEntity(ClassRequest request);

    CharacterClassResponse toResponse(CharacterClass entity);

    @Mapping(target = "levels", ignore = true)
    CharacterClassDetailResponse toDetailResponse(CharacterClass entity);
}
