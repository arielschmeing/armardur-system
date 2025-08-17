package br.com.armardur.api.mapper;

import br.com.armardur.api.controller.request.CharacterRequest;
import br.com.armardur.api.controller.response.CharacterResponse;
import br.com.armardur.api.domain.Character;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import static org.mapstruct.ReportingPolicy.ERROR;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ERROR)
public interface CharacterMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "characterClass", ignore = true)
    @Mapping(target = "armorClass", ignore = true)
    @Mapping(target = "expertises", ignore = true)
    @Mapping(target = "elements", ignore = true)
    @Mapping(target = "skills", ignore = true)
    @Mapping(target = "level", ignore = true)
    Character toEntity(CharacterRequest request);

    @Mapping(target = "characterClass", ignore = true)
    @Mapping(target = "elements", ignore = true)
    @Mapping(target = "skills", ignore = true)
    @Mapping(target = "userId", ignore = true)
    CharacterResponse toResponse(Character entity);
}
