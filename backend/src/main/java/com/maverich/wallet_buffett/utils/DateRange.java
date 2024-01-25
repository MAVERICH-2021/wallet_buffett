package com.maverich.wallet_buffett.utils;
/*
Date Range formatter
*/

import lombok.Data;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

@Data
public class DateRange {
    private String startDate;
    private String endDate;

    public DateRange(String startDate, String endDate) {
        this.startDate = validateDateFormat(startDate);
        this.endDate = validateDateFormat(endDate);
    }

    private String validateDateFormat(String date) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            // Parse the date to check if it's in the valid format
            LocalDate.parse(date, formatter);
            return date;
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("Invalid date format, expected yyyy-MM-dd: " + date);
        }
    }
}
