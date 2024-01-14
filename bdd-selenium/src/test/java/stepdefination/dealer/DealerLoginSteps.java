package stepdefination.dealer;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import styker.ConfigurationFile;

public class DealerLoginSteps {

	WebDriver driver;

	ConfigurationFile cf = new ConfigurationFile();
	String baseURl = cf.getBaseURl();
	String driverPath = cf.getDriverPath();


	@Given("I am on the login page")
	public void i_am_on_the_login_page() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.get(baseURl + "login");
	}

	@When("I enter my username and password")
	public void i_enter_my_username_and_password() {
		// Write code here that turns the phrase above into concrete actions
		WebElement username = driver.findElement(By.className("emailtextbox"));
		WebElement password = driver.findElement(By.className("passwordbox"));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		username.sendKeys("dealer");
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		password.sendKeys("dealer@1");
	}

	@When("I click the login button")
	public void i_click_the_login_button() {
		// Write code here that turns the phrase above into concrete actions
		WebElement loginButton = driver.findElement(By.className("loginbtn"));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		loginButton.click();
	}

	@Then("I should be taken to the home page")
	public void i_should_be_taken_to_the_home_page() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		assertEquals(baseURl + "dealer/request/dashboard", driver.getCurrentUrl());
	}

}
