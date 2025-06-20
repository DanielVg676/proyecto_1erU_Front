import Dashboard from "../modules/dashboard/Dashboard";
import ProductData from "../modules/products/ProductData";
import UserForm from "../modules/user/UserForm";

export interface AppRoute {
  path: string;
  element: JSX.Element;
  label?: string;
  icon?: string;
  roleIds?: string[]; // si quieres filtrar por rol
  hidden?: boolean;
}

const routes: AppRoute[] = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    label: 'Inicio',
    icon: 'HomeOutlined',
  },
  {
    path: '/users',
    element: <UserForm />,
    label: 'Usuarios',
    icon: 'UserOutlined',
  },
  {
    path: '/orders',
    element: <UserForm />,
    label: 'Usuarios',
    icon: 'UserOutlined',
  },
  {
    path: '/products',
    element: <ProductData />,
    label: 'Productos',
    icon: 'UserOutlined',
  },
  {
    path: '/reports',
    element: <ProductData />,
    label: 'Productos',
    icon: 'UserOutlined',
  },
]

export default routes;
