package com.maverich.wallet_buffett.EcoEntityCategory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EcoEntityCategoryService {

    private final EcoEntityCategoryRepository categoryRepository;

    @Autowired
    public EcoEntityCategoryService(EcoEntityCategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
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

    public void deleteById(String id) {
        categoryRepository.deleteById(id);
    }

    // Other custom methods...

}
