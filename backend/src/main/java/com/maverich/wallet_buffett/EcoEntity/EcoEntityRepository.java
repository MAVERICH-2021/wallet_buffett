package com.maverich.wallet_buffett.EcoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EcoEntityRepository extends JpaRepository<EcoEntity, String> {
    List<EcoEntity> findByEcoEntityCategoryId(String id);
}
   
