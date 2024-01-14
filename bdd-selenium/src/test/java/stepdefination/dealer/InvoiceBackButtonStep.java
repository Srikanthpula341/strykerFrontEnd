package stepdefination.dealer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import styker.ConfigurationFile;

public class InvoiceBackButtonStep {

  WebDriver driver;

	ConfigurationFile cf = new ConfigurationFile();
	String baseURl = cf.getBaseURl();
	String driverPath = cf.getDriverPath();
//	String queryParams="/10212?type=return&id=10212&customerId=2";

	@Given("I am on invoice page")
	public void i_am_on_invoice_page() {
		// Write code here that turns the phrase above into concrete actions   
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		driver.get(baseURl + "dealer/invoice");
	}

	@When("I click on back arrow")
	public void i_click_on_back_arrow() {
		// Write code here that turns the phrase above into concrete actions   
		WebElement backBtn = driver.findElement(By.className("btn-click"));
		backBtn.click();
	}



	@Then("I should navigate to dashboard tab")
	public void i_should_navigate_to_dashboard_tab() throws InterruptedException {
		Thread.sleep(1000);
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		assertEquals(baseURl + "dealer/request/dashboard", driver.getCurrentUrl());
		//driver.switchTo().newWindow(WindowType.TAB);

		}

}
