'use strict';

import userManager from './user.manager.js';
import paramManager from './param.manager.js';

function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getParamManager: getter(paramManager),
};
