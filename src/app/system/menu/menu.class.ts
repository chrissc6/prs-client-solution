export class Menu{
    display: string;
    route: string;
    toolTip: string;

    //could add active to only display active
    constructor(display: string, route: string, tooltip:string = "")
    {
        this.display = display;
        this.route = route;
        this.toolTip = tooltip;
    }
}