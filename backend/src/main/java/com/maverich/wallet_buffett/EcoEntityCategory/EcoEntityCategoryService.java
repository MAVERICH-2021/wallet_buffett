package com.maverich.wallet_buffett.EcoEntityCategory;

import com.maverich.wallet_buffett.EcoEntity.EcoEntity;
import com.maverich.wallet_buffett.EcoEntity.EcoEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EcoEntityCategoryService {

    private final EcoEntityCategoryRepository categoryRepository;
    private final EcoEntityRepository ecoEntityRepository;

    @Autowired
    public EcoEntityCategoryService(EcoEntityCategoryRepository categoryRepository, EcoEntityRepository ecoEntityRepository) {
        this.categoryRepository = categoryRepository;
        this.ecoEntityRepository = ecoEntityRepository;
    }

    public EcoEntityCategory save(EcoEntityCategory category) {
        return categoryRepository.save(category);
    }

    public Optional<EcoEntityCategory> findById(String id) {
        return categoryRepository.findById(id);
    }

    public List<EcoEntityCategory> findAll() {
        return categoryRepository.findAll();
    }

    //when delete a category, all the entities in this category will be set to default category
    public void deleteById(String id) {
// 1. Find the default category (however you choose to define it)
        EcoEntityCategory defaultCategory = null;
        try {
            defaultCategory = categoryRepository.findByName("system_default").orElseThrow(
                    () -> new RuntimeException("Default category not found"));
        } catch (Exception e) {
            e.printStackTrace();
            defaultCategory = createDefaultCategory();
        }
        // 2. Find all EcoEntities with the category to be deleted
        List<EcoEntity> entities = ecoEntityRepository.findByEcoEntityCategoryId(id);

        // 3. Set their category to the default
        for (EcoEntity entity : entities) {
            entity.setEcoEntityCategory(defaultCategory);
            ecoEntityRepository.save(entity); // Save the updated entity
        }

        categoryRepository.deleteById(id);
    }

    private EcoEntityCategory createDefaultCategory() {
        EcoEntityCategory defaultCategory = new EcoEntityCategory();
        defaultCategory.setName("system_default");
        defaultCategory.setDescription("System default category");
        return categoryRepository.save(defaultCategory);
    }

}
