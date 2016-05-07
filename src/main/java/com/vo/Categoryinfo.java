package com.vo;

/**
 * Categoryinfo entity. @author MyEclipse Persistence Tools
 */

public class Categoryinfo implements java.io.Serializable {

	// Fields

	private Integer id;
	private String categoryName;
	private String illustration;
	private Integer level;
	private Integer pid;

	// Constructors

	/** default constructor */
	public Categoryinfo() {
	}

	/** full constructor */
	public Categoryinfo(String categoryName, String illustration,
			Integer level, Integer pid) {
		this.categoryName = categoryName;
		this.illustration = illustration;
		this.level = level;
		this.pid = pid;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategoryName() {
		return this.categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getIllustration() {
		return this.illustration;
	}

	public void setIllustration(String illustration) {
		this.illustration = illustration;
	}

	public Integer getLevel() {
		return this.level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public Integer getPid() {
		return this.pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

}