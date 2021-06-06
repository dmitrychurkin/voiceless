import { lazy } from "react";

export { default as DashboardRoot } from './DashboardRoot';
export { default as DashboardGeneral } from './DashboardGeneral';
export default lazy(() => import('./Dashboard'));
