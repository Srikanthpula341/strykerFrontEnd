package stepdefination.dealer;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/dealer", glue = {"stepdefination/dealer"}, tags = "@consumable")
public class TestRunnerConsumbale {

}
