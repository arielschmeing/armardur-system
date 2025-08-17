package br.com.armardur.api.validator.user;

import br.com.armardur.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
@RequiredArgsConstructor
public class UserEmailExistsValidator {

    private final UserRepository userRepository;

    public void validate(String email) {
        boolean exists = userRepository.existsByEmail(email);

        if(exists) {
            throw new ResponseStatusException(BAD_REQUEST, "User with email already registered.");
        }
    }
}
