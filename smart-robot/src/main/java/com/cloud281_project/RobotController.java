package com.cloud281_project;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/robots")
public class RobotController {

//    private final RobotService robotService;
//
//    public RobotController(RobotService robotService) {
//        this.robotService = robotService;
//    }
//    
    @GetMapping({"/", "/welcome"})
    public String welcome() {
    	return "welcome";
    }
    
    @GetMapping("/signup")
    public String signup() {
    	return "signup";
    }
    
    @GetMapping("/login")
    public String login() {
    	return "login";
    } 
    
    @GetMapping("/dashboard")
    public String dashboard() {
    	return "dashboard";
    } 
    
    @GetMapping("/AlertsAndNotifications")
    public String AlertsAndNotifications() {
    	return "AlertsAndNotifications";
    } 
    
    @GetMapping("/forgot_password")
    public String forgot_password() {
    	return "forgot_password";
    }
    
    @GetMapping("/PatrolScheduling")
    public String PatrolScheduling() {
    	return "PatrolScheduling";
    }
    
    @GetMapping("/Profile")
    public String Profile() {
    	return "Profile";
    }
    
    @GetMapping("/reset_password")
    public String reset_password() {
    	return "reset_password";
    }
    
    @GetMapping("/robotmanagement")
    public String robotmanagement() {
    	return "robotmanagement";
    }
    
    @GetMapping("/robotregistration")
    public String robotregistration() {
    	return "robotregistration";
    }
    
    @GetMapping("/SecuritySettings")
    public String SecuritySettings() {
    	return "SecuritySettings";
    }
    
    @GetMapping("/SystemPreferences")
    public String SystemPreferences() {
    	return "SystemPreferences";
    }
    
    @GetMapping("/user_management")
    public String user_management() {
    	return "user_management";
    }
    
    @GetMapping("/UserSimulatorOverview")
    public String UserSimulatorOverview() {
    	return "UserSimulatorOverview";
    }
//    @GetMapping
//    public String getAllRobots() {
//        // Logic to get all robots (replace with your actual implementation)
//        return "Getting all robots";
//    }
//
//    @GetMapping("/{id}")
//    public String getRobotById(@PathVariable Long id) {
//        // Logic to get a specific robot by ID
//        return "Getting robot with ID: " + id;
//    }
//
//    @PostMapping
//    public String createRobot(@RequestBody Robot robot) {
//        // Logic to create a new robot
//        return "Creating a new robot: " + robot;
//    }
//
//    @PutMapping("/{id}")
//    public String updateRobot(@PathVariable Long id, @RequestBody Robot robot) {
//        // Logic to update an existing robot
//        return "Updating robot with ID: " + id;
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteRobot(@PathVariable Long id) {
//        // Logic to delete a robot
//        return "Deleting robot with ID: " + id;
//    }
//
//	public RobotService getRobotService() {
//		return robotService;
//	}
}