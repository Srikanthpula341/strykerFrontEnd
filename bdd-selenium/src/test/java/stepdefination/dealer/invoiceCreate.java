package stepdefination.dealer;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import styker.ConfigurationFile;

public class invoiceCreate {
	
WebDriver driver;
	
	ConfigurationFile cf = new ConfigurationFile();
	String baseURl = cf.getBaseURl();
	String driverPath = cf.getDriverPath();
	

	@Given("I am on the create invoice page")
	public void i_am_on_the_create_invoice_page()  {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		driver.get(baseURl + "/dealer/invoice");
	}
	
	@When("I enter the customer name, ticket id and discount")
	public void i_enter_the_customer_name_ticket_id_and_discount() {
		// Write code here that turns the phrase above into concrete actions
		WebElement customerName = driver.findElement(By.className("customer"));
		WebElement discount = driver.findElement(By.className("discount"));
		customerName.sendKeys("Global hospital");
		discount.sendKeys("5%");
	}
	
	@When("when i click on the create invoice button")
	public void when_i_click_on_the_create_invoice_button() {
		// Write code here that turns the phrase above into concrete actions
		WebElement invoiceCreateButton = driver.findElement(By.id("invoiceButton"));
		invoiceCreateButton.click();
	}
	
	@Then("the data should reach in invoice form")
	public void the_data_should_reach_in_invoice_form() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		assertEquals(baseURl + "dealer/invoice", driver.getCurrentUrl());
	}

}
