package com.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.dao.CategoryDAO;

/**
 * spring配置类
 * @author 宋世鹏
 *
 */
@Configuration
@ComponentScan(basePackages={"com"})//以com包为基础扫描
public class AppConfig {
	
	/**
	 * 配置页面渲染
	 * @return
	 */
	@Bean
	public InternalResourceViewResolver getInternalResourceViewResolver(){
		InternalResourceViewResolver resolver=new InternalResourceViewResolver();
		resolver.setPrefix("/");
		resolver.setSuffix(".jsp");
		return resolver;
	}
	
	@Bean
	public CategoryDAO categoryDAO(){
		return new CategoryDAO();
	}
}
