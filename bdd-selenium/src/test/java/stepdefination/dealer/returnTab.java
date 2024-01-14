package stepdefination.dealer;
import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class returnTab {
  WebDriver driver;
	String baseURl="http://localhost:4200/";
	String queryParams="/10212?type=return&id=10212&customerId=2";

	@Given("I am on return details tab")
	public void i_am_on_return_details_tab() {
		// Write code here that turns the phrase above into concrete actions   
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(baseURl + "dealer/request/return"+queryParams);
	}

	@When("I click on mark as missing button")
	public void i_click_on_mark_as_missing_button() {
		// Write code here that turns the phrase above into concrete actions   
		WebElement missingItemsBtn = driver.findElement(By.className("missingItemsBtn"));
		missingItemsBtn.click();
	}

	@Then("I should be taken to the missing details tab")
	public void i_should_be_taken_to_the_missing_details_tab() throws InterruptedException {
//		Thread.sleep(1000);
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		assertEquals(baseURl + "dealer/request/return", driver.getCurrentUrl());
//		driver.switchTo().newWindow(WindowType.TAB);
//		driver.navigate().to("http://localhost:4200/dealer/request/return/10212?type=return&id=10212&customerId=2");
		}

}
