import paramDAO from '../DAO/paramDAO';
const item = {

}
function create() {
    async function query() {
        let result = paramDAO.query();
        if (result) {
            return result;
        }
    }

    async function post() {
        let result = await paramDAO.post();
        if (result) {
            return result;
        }
    }

    return {
        query: query,
    };
}

export default {
    create: create
};
