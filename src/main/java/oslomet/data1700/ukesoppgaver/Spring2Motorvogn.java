package oslomet.data1700.ukesoppgaver;

public class Spring2Motorvogn {
    // Deklarerer variabler
    private String personnummer;
    private String navn;
    private String adresse;
    private String kjennetegn;
    private String merke;
    private String type;

    // Konstruktør
    public Spring2Motorvogn(String personnummer, String navn, String adresse, String kjennetegn, String merke, String type) {
        this.personnummer = personnummer;
        this.navn = navn;
        this.adresse = adresse;
        this.kjennetegn = kjennetegn;
        this.merke = merke;
        this.type = type;
    }

    // Tom konstruktør
    public Spring2Motorvogn() {

    }

    // Getter og setter metoder for variablene
    public String getPersonnummer() {
        return personnummer;
    }

    public void setPersonnummer(String personnummer) {
        this.personnummer = personnummer;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getKjennetegn() {
        return kjennetegn;
    }

    public void setKjennetegn(String kjennetegn) {
        this.kjennetegn = kjennetegn;
    }

    public String getMerke() {
        return merke;
    }

    public void setMerke(String merke) {
        this.merke = merke;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
