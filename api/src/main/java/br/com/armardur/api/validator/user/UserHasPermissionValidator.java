package br.com.armardur.api.validator.user;

import br.com.armardur.api.service.user.ExtractUserTokenService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
@RequiredArgsConstructor
public class UserHasPermissionValidator {

    private final ExtractUserTokenService extractUserTokenService;

    public void validate(HttpServletRequest httpRequest, Long id) {
        if(!id.equals(extractUserTokenService.extract(httpRequest))) {
            throw new ResponseStatusException(BAD_REQUEST, "User does not has permission.");
        }
    }
}
