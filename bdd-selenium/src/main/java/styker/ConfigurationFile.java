package styker;

public class ConfigurationFile {

	private String baseURl = "http://localhost:4200/";
	private String driverPath = "drivers/chromedriver.exe";

	public String getBaseURl() {
		return baseURl;
	}

	public void setBaseURl(String baseURl) {
		this.baseURl = baseURl;
	}

	public String getDriverPath() {
		return driverPath;
	}

	public void setDriverPath(String driverPath) {
		this.driverPath = driverPath;
	}

}
