package oslomet.data1700.ukesoppgaver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Spring2Controller {
    public final List<Spring2Motorvogn> motorvognRegister = new ArrayList<>();

    @PostMapping("/tilServer")
    public void lagre(Spring2Motorvogn bil) {
        motorvognRegister.add(bil);
    }

    @GetMapping("/tilKlient")
    public List<Spring2Motorvogn> hentAlle() {
        return motorvognRegister;
    }

    @GetMapping("/slettRegister")
    public void slett() {
        motorvognRegister.clear();
    }
}
