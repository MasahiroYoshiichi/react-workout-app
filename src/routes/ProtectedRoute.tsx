// ProtectedRoute.tsx
import { FC } from 'react';
import { Route, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: React.ReactElement;
    path: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element, path }) => {
    const accessToken = localStorage.getItem('accessToken');

        if (accessToken != null) {
            return <Navigate to="/main" replace />;
    } else {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!accessToken) {
            return <Navigate to="/signin" replace />;
        }
    }

    return <Route path={path} element={element} />;
};

export default ProtectedRoute;
