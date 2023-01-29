package com.example.auth.Service;

import com.example.auth.Dto.LoginDto;
import com.example.auth.Entity.RefreshToken;
import com.example.auth.Entity.User;
import com.example.auth.Repository.RedisRepository;
import com.example.auth.Repository.UserRepository;
import com.example.auth.Vo.DefaultResponse;
import com.example.auth.Vo.ResponseMessage;
import com.example.auth.Vo.StatusCode;
import com.example.auth.Vo.TokenInfo;
import com.example.auth.Security.TokenProvider;
import com.example.auth.Util.SecurityUtil;

import java.util.Optional;
import org.aspectj.bridge.Message;

import org.springframework.boot.json.BasicJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Map;
import java.util.Objects;


@Service
public class AuthService {

    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final TokenProvider tokenProvider;
    private final RedisRepository redisRepository;
    private final UserRepository userRepository;

    public AuthService(AuthenticationManagerBuilder authenticationManagerBuilder,
            TokenProvider tokenProvider,
            RedisRepository redisRepository,
            UserRepository userRepository) {

        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.tokenProvider = tokenProvider;
        this.redisRepository = redisRepository;
        this.userRepository=userRepository;
    }

    public TokenInfo login(LoginDto loginDto) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(),
                        loginDto.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken);

        Optional<User> oneByEmail = userRepository.findOneByEmail(loginDto.getEmail());
        Long userId = oneByEmail.get().getUserId();

        TokenInfo jwt = tokenProvider.createToken(authentication, userId);
        RefreshToken refreshTokenInRedis = findRefreshToken(userId);

        if (Objects.isNull(refreshTokenInRedis)) {    //redis에 refreshtoken 없으면 최초로그인
            RefreshToken redisRefreshToken = new RefreshToken(jwt.getRefreshToken(),
                    userId);
            redisRepository.save(redisRefreshToken);
        } else {   //있으면 최초로그인x
            jwt.setRefreshToken(null);
        }

        return jwt;
    }


    public RefreshToken findRefreshToken(Long userId) {
        return redisRepository.findRefreshTokenByUserId(userId);
    }

//    public boolean validateRefreshToken(RefreshToken refreshTokenInRedis,
//            String refreshTokenInHeaders) {
//        System.out.println("refreshTokenInRedis = " + refreshTokenInRedis);
//        System.out.println("refreshTokenInHeaders = " + refreshTokenInHeaders);
//
//        if (Objects.isNull(refreshTokenInRedis)) {    //refreshtoken이 만료됐을때 로그인 요청
//            return false;
//        } else {   //refreshtoken이 존재할때
//            System.out.println("refreshTokenInRedis.getRefreshToken() = "
//                    + refreshTokenInRedis.getRefreshToken());
//            if (!refreshTokenInRedis.getRefreshToken().equals(refreshTokenInHeaders)) {
//                System.out.println("토큰의 유저 정보가 일치하지 않습니다.");
//                return false;
//            } else {
//                return true;
//            }
//
//        }
//
//
//    }

//    public DefaultResponse reissueRefreshToken(String refreshTokenInHeaders) {
//        String email = SecurityUtil.getCurrentUsername().get();
//        RefreshToken refreshTokenInRedis = findRefreshToken(email);
//
//        if (Objects.isNull(refreshTokenInRedis)) {    //refreshtoken이 만료됐을때 로그인 요청
//            return new DefaultResponse(StatusCode.RE_LOGIN, ResponseMessage.LOGIN_AGAIN, null);
//        } else {   //refreshtoken이 존재할때
//            System.out.println("refreshTokenInRedis.getRefreshToken() = "
//                    + refreshTokenInRedis.getRefreshToken());
//            if (!refreshTokenInRedis.getRefreshToken()
//                    .equals(refreshTokenInHeaders)) {   //토큰 정보가 일치하지 않을때
//                System.out.println("토큰의 유저 정보가 일치하지 않습니다.");
//                return new DefaultResponse(StatusCode.TOKEN_INVALID, ResponseMessage.TOKEN_INVALID,
//                        null);
//            } else {
//                final Authentication authentication = SecurityContextHolder.getContext()
//                        .getAuthentication();
//                String accessToken = tokenProvider.createAccessToken(authentication);
//                return new DefaultResponse(StatusCode.OK, ResponseMessage.TOKEN_REISSUE,
//                        accessToken);
//            }
//        }

     /*   System.out.println("refreshTokenInRedis" + refreshTokenInRedis);
        System.out.println("refreshTokenInHeaders = " + refreshTokenInHeaders);

        if(validateRefreshToken(refreshTokenInRedis,refreshTokenInHeaders)){
            final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String accessToken = tokenProvider.createAccessToken(authentication);
            return accessToken;
        }
        else{
            System.out.println("refresh token이 유효하지 않습니다");
            return null;
        }

    }*/

}