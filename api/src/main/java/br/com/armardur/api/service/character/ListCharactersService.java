package br.com.armardur.api.service.character;

import br.com.armardur.api.controller.response.CharacterResponse;
import br.com.armardur.api.repository.CharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ListCharactersService {

    private final DetailCharacterService detailCharacterService;
    private final CharacterRepository characterRepository;

    public List<CharacterResponse> list() {
        return characterRepository.findAll().stream()
                .map(c -> detailCharacterService.detail(c.getId()))
                .toList();
    }
}
