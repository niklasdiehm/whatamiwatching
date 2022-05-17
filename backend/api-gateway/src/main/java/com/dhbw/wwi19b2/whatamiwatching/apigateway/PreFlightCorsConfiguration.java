package com.dhbw.wwi19b2.whatamiwatching.apigateway;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;

/**
 * Workaround für nicht funktionierenden CORS Option Pre-Flight.
 * Vgl. https://github.com/spring-cloud/spring-cloud-gateway/issues/840#issuecomment-522667819
 */
@Configuration
public class PreFlightCorsConfiguration {

    @Bean
    public CorsWebFilter corsFilter() {
        return new CorsWebFilter(corsConfigurationSource());
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
        
        config.addAllowedMethod(HttpMethod.GET);
        config.addAllowedMethod(HttpMethod.PUT);
        config.addAllowedMethod(HttpMethod.POST);
        config.addAllowedMethod(HttpMethod.PATCH);
        config.addAllowedMethod(HttpMethod.DELETE);
        config.addAllowedMethod(HttpMethod.HEAD);
        config.addAllowedMethod(HttpMethod.TRACE);
        config.addAllowedMethod(HttpMethod.OPTIONS);
        
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}