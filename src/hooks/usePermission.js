// src/hooks/usePermission.js
import { useAuth } from "../auth/auth";

const usePermission = (pagePath) => {
    const { user, permissions } = useAuth();

    const hasAccess = user?.role === "superadmin" || permissions.some(
        (perm) => perm.page === pagePath && perm.type === "access"
    );

    const canDelete = user?.role === "superadmin" || permissions.some(
        (perm) => perm.page === pagePath && perm.type === "delete"
    );

    return { hasAccess, canDelete };
};

export default usePermission;
