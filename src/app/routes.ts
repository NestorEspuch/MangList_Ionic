import { Routes } from "@angular/router";
import { logoutActivateGuard } from "./guards/logoutActivateGuard.guard";
import { loginActivateGuard } from "./guards/loginActivateGuard.guard";

export const APP_ROUTES: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./comics/comics.routes").then((p) => p.COMICS_ROUTES),
    },
    {
        path: "auth",
        loadChildren: () =>
            import("./auth/auth.routes").then((p) => p.AUTH_ROUTES),
        canActivate: [logoutActivateGuard],
    },
    {
        path: "about",
        loadChildren: () =>
            import("./about-us/about-us.routes").then(
                (p) => p.ABOUT_ROUTES
            ),
    },
    {
        path: "contact",
        loadChildren: () =>
            import("../app/contact/contact.routes").then(
                (p) => p.CONTACT_ROUTES
            ),
    },
    {
        path: "users",
        loadChildren: () =>
            import("../app/users/users.routes").then((p) => p.USER_ROUTES),
        canActivate: [loginActivateGuard],
    },
    {
        path: "subscriptions",
        loadChildren: () =>
            import("./subscriptions/subscriptions.routes").then(
                (p) => p.SUBSCRIPTIONS_ROUTES
            ),
        canActivate: [loginActivateGuard],
    },
    // Default route (empty) -> Redirect to restaurant page
    { path: "", redirectTo: "/", pathMatch: "full" },
    // Doesn't match any of the above
    { path: "**", redirectTo: "/" },
];
