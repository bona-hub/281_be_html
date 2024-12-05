package com.cloud281_project;

public class Robot {

	    // Define Robot properties (id, name, status, etc.)
	    private Long id;
	    private String name;
	    private String status;

	    // Constructors, getters and setters
	    public Robot() {}

	    public Robot(Long id, String name, String status) {
	        this.id = id;
	        this.name = name;
	        this.status = status;
	    }

	    // Getters and setters
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getStatus() {
	        return status;
	    }

	    public void setStatus(String status) {
	        this.status = status;
	    }
	}

