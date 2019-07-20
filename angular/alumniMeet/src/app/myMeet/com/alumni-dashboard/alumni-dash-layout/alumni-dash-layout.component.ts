import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-alumni-dash-layout',
  templateUrl: './alumni-dash-layout.component.html',
  styleUrls: ['./alumni-dash-layout.component.css']
})
export class AlumniDashLayoutComponent implements OnInit {
  activeId = null;
  dashboardMenu = [
    {
      title: "Start",
      menu: [
        { title: "Dashboard", routerLink: "/alumni/dashboard", class: "icon-material-outline-dashboard" },
        { title: "Manage Apointment", routerLink: "/alumni/apt", class: "icon-material-outline-business-center" },
        { title: "Logout", class: "icon-material-outline-power-settings-new" },
      ]
    }
  ]
  logout() {
    localStorage.clear()
    window.location.reload()
  }
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.setActiveId("Dashboard")
    this.router.events.subscribe(x => {

      if (activeRoute.snapshot["_routerState"]) {
        let url = activeRoute.snapshot["_routerState"].url
        let menu = this.dashboardMenu[0].menu.filter(x => x.routerLink == url)[0]
        //console.log(menu, url)
        if (menu) {
          this.setActiveId(menu.title)
        }
      }
    })

  }
  setActiveId(title) {
    this.activeId = title
  }
  ngOnInit() {
  }

}
