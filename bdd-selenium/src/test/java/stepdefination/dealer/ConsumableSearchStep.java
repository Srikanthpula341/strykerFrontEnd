package stepdefination.dealer;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import pagefactory.ConsumableSearch;
import styker.ConfigurationFile;

public class ConsumableSearchStep {
  WebDriver driver;
  ConsumableSearch consumableSearch;
  ConfigurationFile cf = new ConfigurationFile();
  String baseURl = cf.getBaseURl();
  String driverPath = cf.getDriverPath();

  @Before
  public void browserSetup() {
    System.setProperty("webdriver.chrome.driver", driverPath);
    driver = new ChromeDriver();
  }


  @Given("I am on the dashboard page which has consumables table")
  public void i_am_on_the_dashboard_page_which_has_consumables_table() throws InterruptedException {
    driver.get(baseURl + "dealer/request/dashboard");
    Thread.sleep(5000);
  }

  @When("^when i enter the search text like (.*)$")
  public void when_i_enter_the_search_text_like(String searchText) {
    consumableSearch = new ConsumableSearch(driver);
    consumableSearch.setSearchText(searchText);
  }

  @Then("it should load the data according to the searched text")
  public void it_should_load_the_data_according_to_the_searched_text() {
    System.out.println("success3");

  }

  @After
  public void tearDown() {
//    driver.close();
//    driver.quit();
  }

}
