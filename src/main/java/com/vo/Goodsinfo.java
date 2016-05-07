package com.vo;

/**
 * Goodsinfo entity. @author MyEclipse Persistence Tools
 */

public class Goodsinfo implements java.io.Serializable {

	// Fields

	private Integer id;
	private String goodsname;
	private String categoryid;
	private String pic;
	private Double money;
	private String illustration;
	private Integer clicknum;
	private Integer sellednum;
	private Integer state;

	// Constructors

	/** default constructor */
	public Goodsinfo() {
	}

	/** full constructor */
	public Goodsinfo(String goodsname, String categoryid, String pic,
			Double money, String illustration, Integer clicknum,
			Integer sellednum, Integer state) {
		this.goodsname = goodsname;
		this.categoryid = categoryid;
		this.pic = pic;
		this.money = money;
		this.illustration = illustration;
		this.clicknum = clicknum;
		this.sellednum = sellednum;
		this.state = state;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getGoodsname() {
		return this.goodsname;
	}

	public void setGoodsname(String goodsname) {
		this.goodsname = goodsname;
	}

	public String getCategoryid() {
		return this.categoryid;
	}

	public void setCategoryid(String categoryid) {
		this.categoryid = categoryid;
	}

	public String getPic() {
		return this.pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}

	public Double getMoney() {
		return this.money;
	}

	public void setMoney(Double money) {
		this.money = money;
	}

	public String getIllustration() {
		return this.illustration;
	}

	public void setIllustration(String illustration) {
		this.illustration = illustration;
	}

	public Integer getClicknum() {
		return this.clicknum;
	}

	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}

	public Integer getSellednum() {
		return this.sellednum;
	}

	public void setSellednum(Integer sellednum) {
		this.sellednum = sellednum;
	}

	public Integer getState() {
		return this.state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

}