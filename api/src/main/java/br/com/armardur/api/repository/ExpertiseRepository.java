package br.com.armardur.api.repository;

import br.com.armardur.api.domain.Expertise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpertiseRepository extends JpaRepository<Expertise, Long> {
}
