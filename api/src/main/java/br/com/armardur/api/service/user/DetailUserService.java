package br.com.armardur.api.service.user;

import br.com.armardur.api.controller.response.CharacterResponse;
import br.com.armardur.api.controller.response.UserResponse;
import br.com.armardur.api.domain.User;
import br.com.armardur.api.mapper.CharacterMapper;
import br.com.armardur.api.mapper.UserMapper;
import br.com.armardur.api.repository.CharacterRepository;
import br.com.armardur.api.service.character.DetailCharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DetailUserService {

    private final SearchUserService searchUserService;
    private final UserMapper userMapper;
    private final CharacterRepository characterRepository;
    private final DetailCharacterService detailCharacterService;

    public UserResponse detail(Long id) {
        User user = searchUserService.byId(id);

        UserResponse response = userMapper.toResponse(user);

        List<CharacterResponse> characters = characterRepository.findByUser(user).stream()
                .map(c -> detailCharacterService.detail(c.getId()))
                .toList();

        response.setCharacters(characters);

        return response;
    }
}
