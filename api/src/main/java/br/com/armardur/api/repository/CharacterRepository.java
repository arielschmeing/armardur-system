package br.com.armardur.api.repository;

import br.com.armardur.api.domain.Character;
import br.com.armardur.api.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharacterRepository extends JpaRepository<Character, Long> {
    List<Character> findByUser(User user);
}
