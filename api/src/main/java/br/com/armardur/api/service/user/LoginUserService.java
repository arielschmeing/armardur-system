package br.com.armardur.api.service.user;

import br.com.armardur.api.domain.User;
import br.com.armardur.api.controller.request.LoginRequest;
import br.com.armardur.api.controller.response.LoginResponse;
import br.com.armardur.api.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LoginUserService {

    private final static long expiresIn = 15600L;

    private final SearchUserService searchUserService;
    private final JwtEncoder jwtEncoder;
    private final UserMapper userMapper;

    @Transactional
    public LoginResponse login(LoginRequest request) {

        User user = searchUserService.byEmail(request.email());
        List<String> permissions = user.getPermissions().stream()
                .map(p -> p.getRole().toString())
                .toList();

        JwtClaimsSet jwt = JwtClaimsSet.builder()
                .issuer("armardur-api")
                .subject(user.getName())
                .expiresAt(Instant.now().plusSeconds(expiresIn))
                .issuedAt(Instant.now())
                .claim("id", user.getId())
                .claim("scope", permissions)
                .build();

        String token = jwtEncoder.encode(JwtEncoderParameters.from(jwt)).getTokenValue();

        return LoginResponse.builder()
                .accessToken(token)
                .expiresIn(expiresIn)
                .user(userMapper.toResponse(user))
                .build();
    }
}
