import business from '../business/business.container';
import applicationException from "../service/applicationException";

const params = [
    {
        temp: 1,
        humidity: 2,
        pressure: 3,
        date: "07.12 12:42:12"
    },
    {
        temp: 2,
        humidity: 3,
        pressure: 4,
        date: "07.01 13:12:22"
    }
]

const paramEndpoint = (router) => {
    router.get('/api/params', async (request, response, next) => {
        try {
            let result = await business.getParamManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/params', async (request, response, next) => {

        response.status(200).send({post: params[params.length - 1]});
    });
};
export default paramEndpoint;
