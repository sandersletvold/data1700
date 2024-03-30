package oslomet.data1700.ukesoppgaver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Spring1 {
    private final Integer[] tempArray = new Integer[]{-3,-2,2,7,12,16,18,17,12,7,3,-2};

    @GetMapping("/innMaaned")
    public int tempRegister(String month) {
        return switch (month) {
            case "Januar" -> tempArray[0];
            case "Februar" -> tempArray[1];
            case "Mars" -> tempArray[2];
            case "April" -> tempArray[3];
            case "Mai" -> tempArray[4];
            case "Juni" -> tempArray[5];
            case "Juli" -> tempArray[6];
            case "August" -> tempArray[7];
            case "September" -> tempArray[8];
            case "Oktober" -> tempArray[9];
            case "November" -> tempArray[10];
            case "Desember" -> tempArray[11];
            default -> 0;
        };
    }


}
