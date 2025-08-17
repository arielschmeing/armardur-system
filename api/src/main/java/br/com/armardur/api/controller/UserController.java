package br.com.armardur.api.controller;

import br.com.armardur.api.controller.request.*;
import br.com.armardur.api.controller.response.LoginResponse;
import br.com.armardur.api.controller.response.UserResponse;
import br.com.armardur.api.service.user.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final ListUsersService listUsersService;
    private final AddUserService addUserService;
    private final LoginUserService loginUserService;
    private final DetailUserService detailUserService;
    private final ChangeUserService changeUserService;
    private final AddRoleService addRoleService;

    @PostMapping
    @ResponseStatus(CREATED)
    public void add(@Valid @RequestBody UserRequest request) {
        addUserService.add(request);
    }

    @PostMapping("/login")
    @ResponseStatus(OK)
    public LoginResponse login(@Valid @RequestBody LoginRequest request) {
        return loginUserService.login(request);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping
    public List<UserResponse> list() {
        return listUsersService.list();
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping("/{id}")
    public UserResponse detail(@Valid @PathVariable Long id) {
        return detailUserService.detail(id);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PutMapping("/name")
    @ResponseStatus(OK)
    public void changeName(@Valid @RequestBody ChangeUserNameRequest request,
                           @PathVariable Long id,
                           HttpServletRequest httpRequest) {
        changeUserService.changeName(request, id, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PutMapping("/password")
    @ResponseStatus(OK)
    public void changePassword(@Valid @RequestBody ChangeUserPasswordRequest request,
                               @PathVariable Long id,
                               HttpServletRequest httpRequest) {
        changeUserService.changePassword(request, id, httpRequest);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @PutMapping("/{id}/role")
    @ResponseStatus(OK)
    public void addRole(@Valid @RequestBody AddRoleRequest request, @PathVariable Long id) {
        addRoleService.add(request, id);
    }

}
