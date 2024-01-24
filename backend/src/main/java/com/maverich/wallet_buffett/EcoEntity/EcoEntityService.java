package com.maverich.wallet_buffett.EcoEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EcoEntityService {

   @Autowired
   private EcoEntityRepository ecoEntityRepository;

   public EcoEntity saveEcoEntity(EcoEntity ecoEntity) {
      return ecoEntityRepository.save(ecoEntity);
   }

/*    public EcoEntity updateEcoEntityById(String id, EcoEntity updatedEcoEntity) {
      Optional<EcoEntity> optionalEcoEntity = ecoEntityRepository.findById(id);
      if (optionalEcoEntity.isPresent()) {
         EcoEntity existingEcoEntity = optionalEcoEntity.get();
         existingEcoEntity.setField1(updatedEcoEntity.getField1());
         existingEcoEntity.setField2(updatedEcoEntity.getField2());
         // Update other fields as needed
         return ecoEntityRepository.save(existingEcoEntity);
      } else {
         throw new IllegalArgumentException("EcoEntity with id " + id + " not found");
      }
   } */

   public List<EcoEntity> getAllEcoEntities() {
      return ecoEntityRepository.findAll();
   }

   public Optional<EcoEntity> getEcoEntityById(String id) {
      return ecoEntityRepository.findById(id);
   }

   public void deleteEcoEntity(String id) {
      ecoEntityRepository.deleteById(id);
   }
}
   

