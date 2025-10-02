export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    const token = localStorage.getItem("token");
    
    // Izinkan akses ke halaman utama (thanks.vue) tanpa token
    if (!token && to.path !== "/login" && to.path !== "/") {
      return navigateTo("/login");
    }

    if (token && to.path === "/login") {
      return navigateTo("/");
    }
  }
});