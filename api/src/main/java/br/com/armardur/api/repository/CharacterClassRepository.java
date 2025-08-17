package br.com.armardur.api.repository;

import br.com.armardur.api.domain.CharacterClass;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterClassRepository extends JpaRepository<CharacterClass, Long> {
    boolean existsByName(String name);
}
