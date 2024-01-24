package com.maverich.wallet_buffett.EcoEntityCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.maverich.wallet_buffett.EcoEntityCategory.EcoEntityCategory;

@RestController
@RequestMapping("/ecoEntityCategories")
public class EcoEntityCategoryController {
      private final EcoEntityCategoryService ecoEntityCategoryService;

   @Autowired
   public EcoEntityCategoryController(EcoEntityCategoryService ecoEntityCategoryService) {
      this.ecoEntityCategoryService = ecoEntityCategoryService;
   }

   @GetMapping("/{id}")
   public ResponseEntity<EcoEntityCategory> getEcoEntityCategoryById(@PathVariable String id) {
      EcoEntityCategory ecoEntityCategory = ecoEntityCategoryService.findById(id) //possible null pointer exception
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "EcoEntityCategory not found with id: " + id));
      return ResponseEntity.ok(ecoEntityCategory);
   }



   @PostMapping
   public ResponseEntity<EcoEntityCategory> postEcoEntityCategory(@RequestBody EcoEntityCategory ecoEntityCategory) {
      EcoEntityCategory createdEcoEntityCategory = ecoEntityCategoryService.save(ecoEntityCategory);
      return ResponseEntity.ok(createdEcoEntityCategory);
   }

   @DeleteMapping("/{id}")
   public void deleteEcoEntityCategory(@PathVariable String id) {
     ecoEntityCategoryService.deleteById(id);
   }
   
}
