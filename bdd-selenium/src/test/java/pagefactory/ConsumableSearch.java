package pagefactory;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ConsumableSearch {
  WebDriver driver;

  @FindBy(id = "con-search")
  WebElement searchInput;

  public ConsumableSearch(WebDriver driver) {
    this.driver = driver;
    PageFactory.initElements(driver, this);
  }

  public void setSearchText(String searchText){
    searchInput.sendKeys(searchText);
  }
}
