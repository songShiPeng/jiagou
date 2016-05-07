package com.dao;

import java.util.List;

import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.criterion.Example;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.vo.Goodsinfo;

/**
 * A data access object (DAO) providing persistence and search support for
 * Goodsinfo entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.dao.Goodsinfo
 * @author MyEclipse Persistence Tools
 */
public class GoodsinfoDAO extends BaseHibernateDAO {
	private static final Logger log = LoggerFactory
			.getLogger(GoodsinfoDAO.class);
	// property constants
	public static final String GOODSNAME = "goodsname";
	public static final String CATEGORYID = "categoryid";
	public static final String PIC = "pic";
	public static final String MONEY = "money";
	public static final String ILLUSTRATION = "illustration";
	public static final String CLICKNUM = "clicknum";
	public static final String SELLEDNUM = "sellednum";
	public static final String STATE = "state";

	public void save(Goodsinfo transientInstance) {
		log.debug("saving Goodsinfo instance");
		try {
			getSession().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Goodsinfo persistentInstance) {
		log.debug("deleting Goodsinfo instance");
		try {
			getSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Goodsinfo findById(java.lang.Integer id) {
		log.debug("getting Goodsinfo instance with id: " + id);
		try {
			Goodsinfo instance = (Goodsinfo) getSession().get(
					"com.dao.Goodsinfo", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Goodsinfo instance) {
		log.debug("finding Goodsinfo instance by example");
		try {
			List results = getSession().createCriteria("com.dao.Goodsinfo")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding Goodsinfo instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Goodsinfo as model where model."
					+ propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByGoodsname(Object goodsname) {
		return findByProperty(GOODSNAME, goodsname);
	}

	public List findByCategoryid(Object categoryid) {
		return findByProperty(CATEGORYID, categoryid);
	}

	public List findByPic(Object pic) {
		return findByProperty(PIC, pic);
	}

	public List findByMoney(Object money) {
		return findByProperty(MONEY, money);
	}

	public List findByIllustration(Object illustration) {
		return findByProperty(ILLUSTRATION, illustration);
	}

	public List findByClicknum(Object clicknum) {
		return findByProperty(CLICKNUM, clicknum);
	}

	public List findBySellednum(Object sellednum) {
		return findByProperty(SELLEDNUM, sellednum);
	}

	public List findByState(Object state) {
		return findByProperty(STATE, state);
	}

	public List findAll() {
		log.debug("finding all Goodsinfo instances");
		try {
			String queryString = "from Goodsinfo";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Goodsinfo merge(Goodsinfo detachedInstance) {
		log.debug("merging Goodsinfo instance");
		try {
			Goodsinfo result = (Goodsinfo) getSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Goodsinfo instance) {
		log.debug("attaching dirty Goodsinfo instance");
		try {
			getSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Goodsinfo instance) {
		log.debug("attaching clean Goodsinfo instance");
		try {
			getSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}
}