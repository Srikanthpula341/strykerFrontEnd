package stepdefination.dealer;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DealerSidenavSteps {
	
	
	  WebDriver driver;
	  String baseURl = "http://localhost:4200/dealer/request/dashboard";
	
	@Given("User is on dashboard")
	public void user_is_on_dashboard() {
		 System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get(baseURl);
	}

	@When("click on ticketid")
	public void click_on_user_id() {
		 WebElement alerticon = driver.findElement(By.className("alert-icon-dashboard"));
		 alerticon.click();
	}

	@Then("call Dashboard route for details tab")
	public void call_dashboard_route_for_details_tab() {
		 String currentUrl = driver.getCurrentUrl();
		  System.out.println(currentUrl);
		  driver.switchTo().newWindow(WindowType.TAB);
		  driver.navigate().to("http://localhost:4200/dealer/request/order/10211?type=order&id=10211&customerId=1");
	}


}
