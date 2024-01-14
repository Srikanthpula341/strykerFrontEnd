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

public class dealerInvoice {
  WebDriver driver;
	String baseURl="http://localhost:4200/";
//	String queryParams="/10212?type=return&id=10212&customerId=2";

	@Given("I am on the dashboard tab")
	public void i_am_on_the_dashboard_tab() {
		// Write code here that turns the phrase above into concrete actions   
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(baseURl + "dealer/request/dashboard");
	}

	@When("I click on the create button")
	public void i_click_on_the_create_button() {
		// Write code here that turns the phrase above into concrete actions   
		WebElement createBtn = driver.findElement(By.className("create-dropdown"));
		createBtn.click();
	}
	@And("I select invoice")
	public void i_select_invoice() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement invoiceOption = driver.findElement(By.id("invoicebtn"));
		invoiceOption.click();

	}


	@Then("I should navigate to invoice page")
	public void i_should_navigate_to_invoice_page() throws InterruptedException {
		Thread.sleep(1000);
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		assertEquals(baseURl + "dealer/invoice", driver.getCurrentUrl());
		driver.switchTo().newWindow(WindowType.TAB);
		driver.navigate().to("http://localhost:4200/dealer/invoice");
		}



}
