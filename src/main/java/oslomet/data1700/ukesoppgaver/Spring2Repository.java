package oslomet.data1700.ukesoppgaver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class Spring2Repository {
    @Autowired
    private JdbcTemplate db;

    public void lagreMotorvogn(Spring2Motorvogn motorvogn) {
        String sql = "INSERT INTO motorvogn (personnummer, navn, adresse, kjennetegn, merke, type) VALUES (?, ?, ?, ?, ?, ?)";
        db.update(sql, motorvogn.getPersonnummer(), motorvogn.getNavn(), motorvogn.getAdresse(), motorvogn.getKjennetegn() ,motorvogn.getMerke(), motorvogn.getType());
    }

    public List<Spring2Motorvogn> hentMotorvogner() {
        String sql = "SELECT * FROM motorvogn";
        List<Spring2Motorvogn> alleMotorvogner = db.query(sql, new BeanPropertyRowMapper<>(Spring2Motorvogn.class));
        return alleMotorvogner;
    }

    public void slettMototvogner() {
        String sql = "DELETE FROM motorvogn";
        db.update(sql);
    }
}
