export const hasPermission = (user, pageKey) => {
    if (!user) return false;
    if (user.role === "superadmin") return true;

    return user.permissions?.some(
        (perm) => perm.page === pageKey && perm.type === "access"
    );
};

export const hasDeletePermission = (user, pageKey) => {
    if (!user) return false;
    if (user.role === "superadmin") return true;

    return user.permissions?.some(
        (perm) => perm.page === pageKey && perm.type === "delete"
    );
};
