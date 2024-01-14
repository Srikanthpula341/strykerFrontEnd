package stepdefination.dealer;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en.And;




public class DealerPipesSteps {
	
	  WebDriver driver;
	  String baseURl = "http://localhost:4200/dealer/request/dashboard";
	  
	  private String dealerstatus;
//	  private String result;

	@Given("user is on dashboard")
	public void user_is_on_dashboard() {
		 System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get(baseURl);
		 driver.manage().window().maximize();
		
	}

	@When("click on filter button on alert sidebar")
	public void click_on_filter_button_on_alert_sidebar() {
		 WebElement searchfilter = driver.findElement(By.className("search-filter-btn"));
		 searchfilter.click();
	}


	@SuppressWarnings("unlikely-arg-type")
	@Then("when filter tab appears, search for \"Orders\"")
	public void when_filter_tab_appears_search_for() {
		 WebElement searchfilterform = driver.findElement(By.className("filter-priority-form"));
		searchfilterform.equals("Orders");		
		 Assert.assertEquals("Orders", searchfilterform.getText());
	}


}
