import { createRouter, createWebHistory } from "vue-router";

const routes = [{}];
const router = Router();

function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
export default router;
