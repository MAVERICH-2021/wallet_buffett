package com.maverich.wallet_buffett.HistoryPrice;

import lombok.Data;

@Data
public class HistoryPrice {
    private String date;
    private double price;
    //系统全部默认美元, 其它货币将在前端根据当前的汇率转换
    private String currency; //历史价格需要记录货币类型,前端会进行转换
    private String linkID;

    public HistoryPrice(String date, double price) {
        this.date = date;
        this.price = price;
    }
}
