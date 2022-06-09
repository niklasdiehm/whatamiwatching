package com.dhbw.wwi19b2.whatamiwatching.genre;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.config.EnableHypermediaSupport;
import org.springframework.web.filter.ForwardedHeaderFilter;

@SpringBootApplication
@EnableFeignClients
@EnableHypermediaSupport(type=EnableHypermediaSupport.HypermediaType.HAL)
public class GenreApplication {

	public static void main(String[] args) {
		SpringApplication.run(GenreApplication.class, args);
	}

	@Bean
    ForwardedHeaderFilter forwardedHeaderFilter() {
        return new ForwardedHeaderFilter();
	}
}
