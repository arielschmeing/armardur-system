package br.com.armardur.api.controller.response;

import lombok.*;

@Data
@Builder @AllArgsConstructor @NoArgsConstructor
public class LoginResponse {

    private String accessToken;
    private Long expiresIn;
    private UserResponse user;
}
