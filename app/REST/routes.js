import paramEndpoint from './param.endpoint.js';
import userEndpoint from './user.endpoint.js';

const routes = function (app) {
    paramEndpoint(app);
    userEndpoint(app);
};

export default routes;
