package com.maverich.wallet_buffett.EcoEntity;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/ecoEntities")
public class EcoEntityController {

   private final EcoEntityService ecoEntityService;

   @Autowired
   public EcoEntityController(EcoEntityService ecoEntityService) {
      this.ecoEntityService = ecoEntityService;
   }

   /*
    * @GetMapping("/{id}")
    * public ResponseEntity<EcoEntity> getEcoEntityById(@PathVariable String id) {
    * Optional<EcoEntity> ecoEntity = ecoEntityService.getEcoEntityById(id);
    * if (ecoEntity.isPresent()) {
    * return ResponseEntity.ok(ecoEntity.get());
    * } else {
    * return ResponseEntity.notFound().build();
    * }
    * }
    */
   @GetMapping("/{id}")
   public ResponseEntity<EcoEntity> getEcoEntityById(@PathVariable String id) {
      EcoEntity ecoEntity = ecoEntityService.getEcoEntityById(id) //possible null pointer exception
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "EcoEntity not found with id: " + id));
      return ResponseEntity.ok(ecoEntity);
   }
/* 
   @PostMapping
   public ResponseEntity<EcoEntity> createEcoEntity(@RequestBody EcoEntity ecoEntity) {
      EcoEntity createdEcoEntity = ecoEntityService.saveEcoEntity(ecoEntity);
      return ResponseEntity.ok(createdEcoEntity);
   }

   @PostMapping
   public ResponseEntity<EcoEntity> updateEcoEntity(@RequestBody EcoEntity ecoEntity) {
      EcoEntity createdEcoEntity = ecoEntityService.saveEcoEntity(ecoEntity);
      return ResponseEntity.ok(createdEcoEntity);
   } */


/*    @PutMapping("/{id}")
   public ResponseEntity<EcoEntity> updateEcoEntity(@PathVariable Long id, @RequestBody EcoEntity ecoEntity) {
      EcoEntity updatedEcoEntity = ecoEntityService.updateEcoEntity(id, ecoEntity);
      if (updatedEcoEntity != null) {
         return ResponseEntity.ok(updatedEcoEntity);
      } else {
         return ResponseEntity.notFound().build();
      }
   } */
   @PostMapping
   public ResponseEntity<EcoEntity> postEcoEntity(@RequestBody EcoEntity ecoEntity) {
      EcoEntity createdEcoEntity = ecoEntityService.saveEcoEntity(ecoEntity);
      return ResponseEntity.ok(createdEcoEntity);
   }

   @DeleteMapping("/{id}")
   public void deleteEcoEntity(@PathVariable String id) {
     ecoEntityService.deleteEcoEntity(id);
   }
}

