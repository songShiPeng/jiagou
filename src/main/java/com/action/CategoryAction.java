package com.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dao.CategoryDAO;
import com.vo.Categoryinfo;

@Controller
public class CategoryAction {

	@Autowired
	private CategoryDAO catgoryDAO;
	private String categoryName;
	private Categoryinfo categoryInfo;
	//拦截器
	@RequestMapping("/categoryList")
	public ModelAndView categoryList(){
		ModelAndView mv=new ModelAndView();
		mv.addObject("categoryList",catgoryDAO.getCategoryList());
		mv.setViewName("/category/categoryList");
		return mv;
	}
	
	@RequestMapping("/categoryShow")
	public ModelAndView categoryShow(int id){//id是url后面带的参数
		categoryInfo=new Categoryinfo();
		ModelAndView mv=new ModelAndView();
		categoryInfo=catgoryDAO.findById(id);
		mv.addObject("categoryInfo",categoryInfo);
		mv.setViewName("/category/categoryShow");
		return mv;
	}
}
