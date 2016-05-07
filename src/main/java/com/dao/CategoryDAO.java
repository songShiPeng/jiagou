package com.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.vo.Categoryinfo;

/**
 * 数据库操作类
 * @author 宋世鹏
 *
 */
public class CategoryDAO  extends BaseHibernateDAO{
	
	public List getCategoryList(){
		Session session = getSession();
		String hql="from Categoryinfo";
		try{
			Query queryObject=session.createQuery(hql);
			List list=queryObject.list();
			return list;
		}catch(Exception e){
			return null;
		}finally{
			session.close();
		}
	}
	
	/**
	 * 根据id得到记录
	 * @param id
	 * @return
	 */
	public Categoryinfo findById(int id){
		Session session=getSession();
		try{
			Categoryinfo categoryInfo=(Categoryinfo) session.get(Categoryinfo.class, id);
			return categoryInfo;
		}catch(Exception e){
			return null;
		}finally{
			session.close();
		}
		
	}
}
