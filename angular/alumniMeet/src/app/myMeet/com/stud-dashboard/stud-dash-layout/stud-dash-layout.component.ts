import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-stud-dash-layout',
  templateUrl: './stud-dash-layout.component.html',
  styleUrls: ['./stud-dash-layout.component.css']
})
export class StudDashLayoutComponent implements OnInit {


  activeId = null;
  dashboardMenu = [
    {
      title: "Start",
      menu: [
        { title: "Dashboard", routerLink: "/stud/dashboard", class: "icon-material-outline-dashboard" },


        { title: "Book a Appoinment", routerLink: "/stud/book-apt", class: "icon-material-outline-question-answer" },
        /* { title: "Review", routerLink: "/dashboard/review", class: "icon-material-outline-rate-review" }, */
        { title: "Manage Appoinments", routerLink: "/stud/apt", class: "icon-material-outline-business-center" },
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
