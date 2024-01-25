package com.maverich.wallet_buffett.EcoEntityCategory;

import com.maverich.wallet_buffett.EcoEntity.EcoEntity;
import com.maverich.wallet_buffett.User.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class EcoEntityCategory {
    @Id
    @GeneratedValue(generator = "uuid")
    private String id;

    
    @NotNull
    private String name;

    private String description;

    @OneToMany(mappedBy = "ecoEntityCategory" , cascade = CascadeType.REFRESH)
    private Set<EcoEntity>  ecoEntities = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
