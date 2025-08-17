package br.com.armardur.api.service.user;

import br.com.armardur.api.controller.response.UserResponse;
import br.com.armardur.api.domain.User;
import br.com.armardur.api.mapper.UserMapper;
import br.com.armardur.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ListUsersService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public List<UserResponse> list() {
        return userRepository.findAll().stream()
                .map(this::detailUser)
                .toList();
    }

    private UserResponse detailUser(User user) {
        UserResponse response = userMapper.toResponse(user);

        response.setCharacters(new ArrayList<>());

        return response;
    }
}
