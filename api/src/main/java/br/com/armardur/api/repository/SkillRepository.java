package br.com.armardur.api.repository;

import br.com.armardur.api.domain.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {

    boolean existsByName(String nome);
}
