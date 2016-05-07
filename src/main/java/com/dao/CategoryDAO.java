package com.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

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
}
