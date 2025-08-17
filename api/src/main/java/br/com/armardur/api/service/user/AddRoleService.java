package br.com.armardur.api.service.user;

import br.com.armardur.api.controller.request.AddRoleRequest;
import br.com.armardur.api.domain.Permission;
import br.com.armardur.api.domain.User;
import br.com.armardur.api.repository.PermissionRepository;
import br.com.armardur.api.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class AddRoleService {

    private final SearchUserService searchUserService;
    private final AddPermissionService addPermissionService;
    private final UserRepository userRepository;
    private final PermissionRepository permissionRepository;

    @Transactional
    public void add(@Valid AddRoleRequest request, Long id) {
        User user = searchUserService.byId(id);

        boolean hasRole = user.getPermissions().stream()
                .map(Permission::getRole)
                .toList()
                .contains(request.role());

        if(hasRole) {
            throw new ResponseStatusException(BAD_REQUEST, "User already has this role.");
        }

        Permission permission = addPermissionService.add(request.role(), user);
        permissionRepository.save(permission);

        user.addPermission(permission);
        userRepository.save(user);
    }
}
