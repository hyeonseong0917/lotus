package com.example.auth.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.TimeToLive;
import org.springframework.data.redis.core.index.Indexed;

import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@RedisHash(value = "refreshtoken", timeToLive = 86400)
@NoArgsConstructor
@AllArgsConstructor
public class RefreshToken {

    @Id
    private String id;
    @Indexed
    private String email;

    private String refreshToken;

    private String provider;


    public RefreshToken(String refreshToken, String email) {
        this.email = email;
        this.refreshToken = refreshToken;
    }
}