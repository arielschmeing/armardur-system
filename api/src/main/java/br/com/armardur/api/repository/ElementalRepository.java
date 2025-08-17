package br.com.armardur.api.repository;

import br.com.armardur.api.domain.Elemental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ElementalRepository extends JpaRepository<Elemental, Long> {
}
