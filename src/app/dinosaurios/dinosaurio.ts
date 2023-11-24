export class Dinosaurio {
    id: number;
    name: String;
    scientificName: String;
    description: String;
    shortDescription: String;
    era: String;
    feeding: String;
    discoveryCountry: String;
    image: String;

    public constructor(id: number,
        name: String, scientificName: String,
        d: String, sd: String, era: String, feeding: String,
        c: String, image: String){
        this.id = id;
        this.name = name;
        this.scientificName = scientificName;
        this.description = d;
        this.shortDescription = sd;
        this.era = era;
        this.feeding = feeding;
        this.discoveryCountry = c;
        this.image = image;

    }

}
