export class Contact {
    public name: string;
    public surname: string;
    public login: string;
    public picture: string;

    constructor(name: string, surname: string, login:string, picture?:string) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.picture = picture;
    }
}