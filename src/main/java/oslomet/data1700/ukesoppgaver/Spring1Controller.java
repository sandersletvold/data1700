package oslomet.data1700.ukesoppgaver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Spring1Controller {
    private final Integer[] tempRegister = new Integer[] {
            -3, -2, 2, 7, 12, 16, 18, 17, 12, 7, 3, -2
    };

    @GetMapping("/tempRegister")
    public int hentTemp(String maaned) {
        switch (maaned.toLowerCase()) {
            case "januar":
                return tempRegister[0];
            case "februar":
                return tempRegister[1];
            case "mars":
                return tempRegister[2];
            case "april":
                return tempRegister[3];
            case "mai":
                return tempRegister[4];
            case "juni":
                return tempRegister[5];
            case "juli":
                return tempRegister[6];
            case "august":
                return tempRegister[7];
            case "september":
                return tempRegister[8];
            case "oktober":
                return tempRegister[9];
            case "november":
                return tempRegister[10];
            case "desember":
                return tempRegister[11];
            default:
                return 0;
        }
    }
}
