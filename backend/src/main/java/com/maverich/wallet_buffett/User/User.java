package com.maverich.wallet_buffett.User;

import com.maverich.wallet_buffett.EcoEntity.EcoEntity;
import com.maverich.wallet_buffett.EcoEntityCategory.EcoEntityCategory;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Set;
import java.util.UUID;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(generator = "uuid")
    private String id;

    private String name;

    private String account;

    private String phone;

    private String email;

    private String password;

    private String createdAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<EcoEntityCategory> ecoEntityCategories;

    @PrePersist
    public void prePersist() {
        name = "user" + UUID.randomUUID().toString().substring(0, 8);
        createdAt = String.valueOf(System.currentTimeMillis());
    }
}
