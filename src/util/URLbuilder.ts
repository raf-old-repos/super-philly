export class URLbuilder {
    public base: string
    private addend: string = ""
    constructor(base: string) {
        this.base = base.endsWith("/") ? base : base.concat("/")
    }

    public attach(route: string): URLbuilder {
        this.addend = this.addend.concat(`${route}/`)
        return this
    }

    public param(key: string, val: string): URLbuilder {
        if (this.addend.endsWith("/")) {
            const newUrl = this.addend.substring(0, this.addend.length - 1)
            this.addend = newUrl.concat(`?${key}=${val}`)
        } else {
            this.addend = this.addend.concat(`?${key}=${val}`)
        }
        return this
    }
    public url(): string {
        return this.base.concat(this.addend)
    }

}