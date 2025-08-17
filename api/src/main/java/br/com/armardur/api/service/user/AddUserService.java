package br.com.armardur.api.service.user;

import br.com.armardur.api.controller.request.UserRequest;
import br.com.armardur.api.domain.Permission;
import br.com.armardur.api.domain.User;
import br.com.armardur.api.mapper.UserMapper;
import br.com.armardur.api.repository.PermissionRepository;
import br.com.armardur.api.repository.UserRepository;
import br.com.armardur.api.validator.user.UserEmailExistsValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static br.com.armardur.api.domain.PermissionType.USER;

@Service
@RequiredArgsConstructor
public class AddUserService {

    private final UserRepository userRepository;
    private final UserEmailExistsValidator userEmailExistsValidator;
    private final PasswordEncoder passwordEncoder;
    private final AddPermissionService addPermissionService;
    private final PermissionRepository permissionRepository;
    private final UserMapper userMapper;

    @Transactional
    public void add(UserRequest request) {

        userEmailExistsValidator.validate(request.email());

        User user = userMapper.toEntity(request);

        user.setActive(true);
        user.setCreatedAt(LocalDateTime.now());
        user.setPassword(passwordEncoder.encode(request.password()));

        Permission permission = addPermissionService.add(USER, user);

        user.addPermission(permission);

        userRepository.save(user);
        permissionRepository.save(permission);
    }
}
