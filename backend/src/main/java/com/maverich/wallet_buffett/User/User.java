package com.maverich.wallet_buffett.User;

import com.maverich.wallet_buffett.EcoEntity.EcoEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class User {

   private String id;

   private String name;

   private String account;

   private String phone;

   private String email;

   private String password;

   private String createdAt;

   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
   private Set<EcoEntity> ecoEntities;

}
