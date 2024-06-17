import { App } from "aws-cdk-lib";
import { S3Stack } from './stacks/s3Stack';
import { ApiGatewayStack } from './stacks/lambdaApiStack'

const app = new App();

new S3Stack(app, 'S3Stack', {
    stackName: 's3Stack',
    env: {
        region: "us-east-1",
        account: "000000000000",
    },
});

new ApiGatewayStack(app, "ApiStack", {
    stackName: 'ApiStack',
    env: {
        region: "us-east-1",
        account: "000000000000",
    }
});

app.synth();