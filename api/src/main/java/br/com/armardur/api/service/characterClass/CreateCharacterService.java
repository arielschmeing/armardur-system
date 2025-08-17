package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.controller.request.CharacterRequest;
import br.com.armardur.api.domain.Character;
import br.com.armardur.api.domain.CharacterClass;
import br.com.armardur.api.domain.User;
import br.com.armardur.api.mapper.CharacterMapper;
import br.com.armardur.api.repository.CharacterRepository;
import br.com.armardur.api.repository.UserRepository;
import br.com.armardur.api.service.character.CalculateAttributeService;
import br.com.armardur.api.service.user.ExtractUserTokenService;
import br.com.armardur.api.service.user.SearchUserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CreateCharacterService {

    private static final int INITIAL_LEVEL = 1;

    private final CharacterMapper characterMapper;
    private final SearchClassService searchClassService;
    private final SearchUserService searchUserService;
    private final CharacterRepository characterRepository;
    private final UserRepository userRepository;
    private final CalculateAttributeService calculateAttributeService;
    private final ExtractUserTokenService extractUserTokenService;

    @Transactional
    public void create(@Valid CharacterRequest request, HttpServletRequest httpRequest, Long classId) {

        User user = searchUserService.byId(extractUserTokenService.extract(httpRequest));
        Character character = characterMapper.toEntity(request);
        CharacterClass characterClass = searchClassService.byId(classId);

        character.setUser(user);
        character.setCharacterClass(characterClass);
        character.setArmorClass(calculateAttributeService
                .calculateArmorClass(character.getConstitution()));
        character.setLevel(INITIAL_LEVEL);

        characterRepository.save(character);

        user.addCharacter(character);

        userRepository.save(user);
    }
}
