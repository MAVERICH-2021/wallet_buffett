package com.maverich.wallet_buffett.EcoEntityCategory;

import com.maverich.wallet_buffett.EcoEntity.EcoEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Set;

@Entity
public class EcoEntityCategory {
    @Id
    @GeneratedValue(generator = "uuid")
    private String id;

    
    @NotNull
    private String name;

    private String description;

    @ManyToMany(mappedBy = "ecoEntityCategory" , cascade = CascadeType.REFRESH)
    private Set<EcoEntity>  ecoEntities;

    
}
