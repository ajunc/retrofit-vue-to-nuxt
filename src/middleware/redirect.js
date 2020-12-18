export default function({route, redirect, store}){
    console.log('------ ' + JSON.stringify(route))
    if(route.path !== '/123' && route.path !== '/collect' && route.path !== '/care' && route.path !== '/my' && route.path !== '/newsDetail'
     && route.path !== '/selfpage' && route.path !== '/editprofile' && route.path !== '/setup' && route.path !== '/search'){
        redirect("/home?type=__all__")
    }
}