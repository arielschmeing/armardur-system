package br.com.armardur.api.service.user;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExtractUserTokenService {

    private final JwtDecoder jwtDecoder;

    public Long extract(HttpServletRequest httpRequest) {
        String token = httpRequest.getHeader("Authorization").substring(7);

        return jwtDecoder.decode(token).getClaim("id");
    }
}
