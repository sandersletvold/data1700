package oslomet.data1700.ukesoppgaver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Spring2Controller {
    @Autowired
    private Spring2Repository repository;

    @PostMapping("/tilServer")
    public void lagre(Spring2Motorvogn bil) {
        repository.lagreMotorvogn(bil);
    }

    @GetMapping("/tilKlient")
    public List<Spring2Motorvogn> hentAlle() {
        return repository.hentMotorvogner();
    }

    @GetMapping("/slettRegister")
    public void slett() {
        repository.slettMototvogner();
    }
}
