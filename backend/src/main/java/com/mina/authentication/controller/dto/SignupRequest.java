package com.mina.authentication.controller.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/* A record class in Java is a special kind of class introduced in Java 16
 * as a preview feature and became standard in Java 17.
 * It's designed to model simple data carriers,
 * making it easier to write concise and safe data objects.*/
public record SignupRequest(
        @Schema(description = "name", example = "Mina")
        @NotBlank(message = "Name cannot be blank")
        String name,

        @Schema(description = "email", example = "mina@gmail.com")
        @Email(message = "Invalid email format")
        @NotBlank(message = "Email cannot be blank")
        String email,

        @Schema(description = "password", example = "123456")
        @NotBlank(message = "Password cannot be blank")
        @Size(min = 6, max = 20, message = "Password must be between 6 and 20 characters")
        String password
        ) {}