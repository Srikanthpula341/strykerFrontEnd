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
import styker.ConfigurationFile;

public class missingPage {
	WebDriver driver;
	
	ConfigurationFile cf = new ConfigurationFile();
	String baseURl = cf.getBaseURl();
	String driverPath = cf.getDriverPath();
	String queryParams="/10212?type=return&id=10212&customerId=2";
	

	@Given("I am in return details page")
	public void i_am_in_return_details_page() {
		// Write code here that turns the phrase above into concrete actions   
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(baseURl + "dealer/request/return"+queryParams);
	}
//	@Given("I am in missing details page")
//	public void i_am_in_missing_details_page() {
//		// Write code here that turns the phrase above into concrete actions   
//		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get(baseURl + "dealer/request/return"+queryParams);
//	}
	@When("I click on missing button")
	public void i_click_on_missing_button() {
		// Write code here that turns the phrase above into concrete actions   
		WebElement missingBtn = driver.findElement(By.className("missingItemsBtn"));
		missingBtn.click();
	}
//
//	
	@Then("I should navigate to missing details page")
	public void i_should_navigate_to_missing_details_page() throws InterruptedException {
		
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		assertEquals(baseURl + "dealer/request/return" + queryParams, driver.getCurrentUrl());
//		driver.switchTo().newWindow(WindowType.TAB);
		//driver.navigate().to("http://localhost:4200/dealer/request/return/10212?type=return&id=10212&customerId=2");
		
	}
	
	
	@Given("I am in missing details page")
	public void i_am_in_missing_details_page() {
		// Write code here that turns the phrase above into concrete actions   
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(baseURl + "dealer/request/return"+queryParams);
	}
	
	@When("I click on invoice it button")
	public void i_click_on_invoice_it_button() {
		// Write code here that turns the phrase above into concrete actions
		WebElement missingItemsBtn = driver.findElement(By.className("invoiceBtn"));
		missingItemsBtn.click();
	}
//////
	@Then("I should be taken to invoice page")
	public void i_should_be_taken_to_the_invoice_tab() throws InterruptedException {
//		Thread.sleep(1000);
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		assertEquals(baseURl + "dealer/invoice", driver.getCurrentUrl());
//		driver.switchTo().newWindow(WindowType.TAB);
		driver.navigate().to("http://localhost:4200/dealer/invoice");
		}



}
