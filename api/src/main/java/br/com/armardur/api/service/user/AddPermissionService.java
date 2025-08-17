package br.com.armardur.api.service.user;

import br.com.armardur.api.domain.Permission;
import br.com.armardur.api.domain.PermissionType;
import br.com.armardur.api.domain.User;
import org.springframework.stereotype.Service;

@Service
public class AddPermissionService {

    public Permission add(PermissionType permissionType, User user) {
        return Permission.builder()
                .role(permissionType)
                .user(user)
                .build();
    }
}
