package br.com.armardur.api.service.characterClass;

import br.com.armardur.api.controller.response.CharacterClassResponse;
import br.com.armardur.api.mapper.CharacterClassMapper;
import br.com.armardur.api.repository.CharacterClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ListClassesService {

    private final CharacterClassRepository characterClassRepository;
    private final CharacterClassMapper characterClassMapper;

    public List<CharacterClassResponse> list() {
        return characterClassRepository.findAll().stream()
                .map(characterClassMapper::toResponse)
                .toList();
    }
}
