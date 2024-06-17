import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {

        console.log('EVENT: \n' + JSON.stringify(event, null, 2));
        if (event.body){
            console.log('Success!');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Succeeded',
            }),
        };
        
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error',
                errorInfo: err,
            }),
        };
    }
}