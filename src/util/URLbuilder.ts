export class URLbuilder {
    public base?: string
    public finalUrl: string = ""
    constructor(base: string) {
        this.base = base.endsWith("/") ? base : base.concat("/")
    }

    public attach(route: string) {
        this.finalUrl = this.finalUrl.concat(`${route}/`)
        return this
    }
    public url() {
        return this.finalUrl   
     }

}