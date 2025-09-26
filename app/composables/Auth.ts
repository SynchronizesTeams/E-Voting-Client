import { ref, onMounted } from "vue";

interface User {
  id: number;
  nomorinduk: string;
  password: string;
}

const user = ref<User | null>(null);
const token = ref<string | null>(null);

export const useAuth = () => {
  const config = useRuntimeConfig();
  const router = useRouter();

  const initializeAuth = () => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (storedToken) {
        token.value = storedToken;
      }
      if (storedUser) {
        try {
          user.value = JSON.parse(storedUser);
        } catch (e) {
          localStorage.removeItem("user");
          user.value = null;
        }
      }
    }
  };

  const login = async (credentials: {
    nomorinduk: string;
    password: string;
  }) => {
    logout();

    try {
      const response = await $fetch<{ token: string; user: User }>(
        `${config.public.apiUrl}/auth/login`,
        {
          method: "POST",
          body: {
            nis: credentials.nomorinduk,
            password: credentials.password,
          },
        }
      );

      if (response.token && response.user) {
        token.value = response.token;
        user.value = response.user;

        if (typeof window !== "undefined") {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
        }
        useRouter().push("/");
        return response;
      } else {
        throw new Error("Login response did not contain token or user.");
      }
    } catch (error: any) {
      console.error("Login failed:", error.data || error.message);
      logout();
      const errorMessage = error.data?.message || "NIS atau password salah. Silahkan coba lagi";
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;

    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  const logoutAndRedirect = () => {
    logout();
    router.push("/login");
  };

  onMounted(() => {
    initializeAuth();
  });

  return {
    user,
    token,
    login,
    logout,
    logoutAndRedirect,
    initializeAuth,
  };
};
