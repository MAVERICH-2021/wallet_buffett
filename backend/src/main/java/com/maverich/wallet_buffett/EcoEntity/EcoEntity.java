package com.maverich.wallet_buffett.EcoEntity;

import com.maverich.wallet_buffett.EcoEntityCategory.EcoEntityCategory;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

/**
 * EcoEntity
 */
@Entity
@Data
public class EcoEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    private String id;

    /**
     * 创建时间/实体运行开始时间 / 可以手动修改
     */
    private String createdDate;

    private String description;


    /**
     * 用户对本entity的记录
     */
    @ElementCollection
    private List<String> logs;
    private String name;
    /**
     * "已转让" "持有" "未持有"
     */
    private Status status;
    /**
     * 实体价值 (和currency锚定)
     */
    private double value;


    @ElementCollection
    private List<String> attachmentIDs;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ecoEntityCategory_id") // This is the foreign key column in the Entity table.
    private EcoEntityCategory ecoEntityCategory;

//    private String ecoEntityCategoryID;

    private enum Status {
        /**
         * 已转让
         */
        TRANSFERRED,
        /**
         * 持有
         */
        HOLDING,
        /**
         * 未持有
         */
        NOT_HOLDING
    }
}



