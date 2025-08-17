package br.com.armardur.api.service.user;

import br.com.armardur.api.domain.User;
import br.com.armardur.api.repository.UserRepository;
import br.com.armardur.api.validator.user.UserHasPermissionValidator;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class SearchUserService {

    private final UserRepository userRepository;
    private final UserHasPermissionValidator userHasPermissionValidator;

    public User byEmail(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if(optionalUser.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "User email not found.");
        }

        return optionalUser.get();
    }

    public User byId(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);

        if(optionalUser.isEmpty()) {
            throw new ResponseStatusException(BAD_REQUEST, "User ID not found.");
        }

        return optionalUser.get();
    }

    public User byIdIfHasPermission(Long id, HttpServletRequest httpRequest) {
        User user = this.byId(id);

        userHasPermissionValidator.validate(httpRequest, id);

        return user;
    }
}
