package stepdefination.dealer;

import java.awt.Color;
import java.util.List;
import java.util.StringTokenizer;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import styker.ConfigurationFile;

public class DealerDashboardSteps {

	WebDriver driver;

	ConfigurationFile cf = new ConfigurationFile();
	String baseURl = cf.getBaseURl();
	String driverPath = cf.getDriverPath();

	@Given("I am on the dashboard page")
	public void i_am_on_the_dashboard_page() {
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();

		driver.get(baseURl + "dealer/request/dashboard");

	}

	@When("when i change the timeframe")
	public void when_i_change_the_timeframe() {
		WebElement dropdown = driver.findElement(By.cssSelector(".form-select.time-frame"));
		Select select = new Select(dropdown);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		select.selectByValue("6");
		WebElement selectedOption = select.getFirstSelectedOption();
		Assert.assertEquals("Last 6 months", selectedOption.getText());

	}

	@And("it should load the data")
	public void it_should_load_the_data() {
		WebElement dropdown = driver.findElement(By.cssSelector(".form-select.time-frame"));
		Select select = new Select(dropdown);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		select.selectByValue("3");
		WebElement selectedOption = select.getFirstSelectedOption();
		Assert.assertEquals("Last 3 months", selectedOption.getText());
	}

	@Then("that loaded data should not be equal to initial one")
	public void that_loaded_data_should_not_be_equal_to_initial_one() {
		WebElement dropdown = driver.findElement(By.cssSelector(".form-select.time-frame"));
		Select select = new Select(dropdown);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		select.selectByValue("12");
		WebElement selectedOption = select.getFirstSelectedOption();
		Assert.assertEquals("Last Year", selectedOption.getText());
	}

	/// checking data of Top Hopistals;

	String tempColor;
	String tempValue;

	@Given("I am on the dashboard with time frame in last month")
	public void i_am_on_the_dashboard_with_time_frame_in_last_month() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.get(baseURl + "dealer/request/dashboard");
		WebElement dropdown = driver.findElement(By.cssSelector(".form-select.time-frame"));
		Select select = new Select(dropdown);
		select.selectByValue("1");

	}

	@When("when i change the timeframe to last year")
	public void when_i_change_the_timeframe_to_last_year() {
		WebElement changeProcedure = driver.findElement(By.cssSelector(".change-value"));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		tempColor = changeProcedure.getCssValue("color");
		tempValue = changeProcedure.getText();

	}

	@Then("that loaded data should  be greater then to initial one")
	public void that_loaded_data_should_be_greater_then_to_initial_one() {

		Assert.assertNotEquals(0, tempValue);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
		Assert.assertNotEquals(0, tempColor);

	}

	@Given("I am on the dashboard with chart drop down available")
	public void i_am_on_the_dashboard_with_chart_drop_down_available() {

	}

	@When("when i change the drop down select in chart")
	public void when_i_change_the_drop_down_select_in_chart() {

	}

	@Then("that chart data will should change")
	public void that_chart_data_will_should_change() {

	}

}
