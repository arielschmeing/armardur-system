package br.com.armardur.api.service.user;

import br.com.armardur.api.domain.User;
import br.com.armardur.api.repository.UserRepository;
import br.com.armardur.api.controller.request.ChangeUserNameRequest;
import br.com.armardur.api.controller.request.ChangeUserPasswordRequest;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ChangeUserService {

    private final SearchUserService searchUserService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void changeName(ChangeUserNameRequest request, Long id, HttpServletRequest httpRequest) {
        User user = searchUserService.byIdIfHasPermission(id, httpRequest);
        user.setName(request.name());

        userRepository.save(user);
    }

    @Transactional
    public void changePassword(ChangeUserPasswordRequest request, Long id, HttpServletRequest httpRequest) {
        User user = searchUserService.byIdIfHasPermission(id, httpRequest);
        user.setPassword(passwordEncoder.encode(request.password()));

        userRepository.save(user);
    }
}
