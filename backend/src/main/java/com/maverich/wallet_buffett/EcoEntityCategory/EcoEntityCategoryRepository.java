package com.maverich.wallet_buffett.EcoEntityCategory;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EcoEntityCategoryRepository extends JpaRepository<EcoEntityCategory, String> {
    Optional<EcoEntityCategory> findByName(String aDefault);
}
