package com.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dao.CategoryDAO;

@Controller
public class CategoryAction {

	@Autowired
	private CategoryDAO catgoryDAO;
	
	@RequestMapping("/categoryList")
	public ModelAndView sayHello(){
		ModelAndView mv=new ModelAndView();
		mv.addObject("message",catgoryDAO.getCategoryList());
		mv.setViewName("index");
		return mv;
	}
}
