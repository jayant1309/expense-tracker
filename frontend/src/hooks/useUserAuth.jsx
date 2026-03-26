import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return;

    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        // ✅ Get token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No token found, redirecting to login...");
          clearUser();
          navigate("/login");
          return;
        }

        // ✅ Add token to request header
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (isMounted && response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);

        // ✅ Handle 401 Unauthorized gracefully
        if (isMounted) {
          clearUser();
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };

    fetchUserInfo();

    return () => {
      isMounted = false;
    };
  }, [user, updateUser, clearUser, navigate]);
};
