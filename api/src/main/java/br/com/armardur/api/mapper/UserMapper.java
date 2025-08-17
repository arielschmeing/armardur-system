package br.com.armardur.api.mapper;

import br.com.armardur.api.controller.request.UserRequest;
import br.com.armardur.api.controller.response.UserResponse;
import br.com.armardur.api.domain.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import static org.mapstruct.ReportingPolicy.ERROR;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ERROR)
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "active", ignore = true)
    @Mapping(target = "permissions", ignore = true)
    @Mapping(target = "characters", ignore = true)
    User toEntity(UserRequest request);

    @Mapping(target = "characters", ignore = true)
    UserResponse toResponse(User entity);
}
