import { LambdaIntegration, MethodLoggingLevel, RestApi } from "aws-cdk-lib/aws-apigateway"
import { Function, Runtime, AssetCode, Code } from "aws-cdk-lib/aws-lambda"
import { Duration, Stack, StackProps, CfnOutput } from "aws-cdk-lib"
import { Construct } from "constructs"
import path from 'node:path';
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"

export class ApiGatewayStack extends Stack {

  private restApi: RestApi
  private lambdaFunction: Function

  constructor(scope: Construct, id: string, props: StackProps) {
      super(scope, id, props)

      this.restApi = new RestApi(this, this.stackName + "RestApi", {
          deployOptions: {
              stageName: 'dev',
              metricsEnabled: true,
              loggingLevel: MethodLoggingLevel.INFO,
              dataTraceEnabled: true,
          },
      })

      this.lambdaFunction = new NodejsFunction(this, "TestLambda", {
          functionName: "TestLambda",
          handler: "handler",
          runtime: Runtime.NODEJS_18_X,
          entry: path.resolve(
            path.join(__dirname, '../index.ts')
          ),
          memorySize: 512,
          timeout: Duration.seconds(10),
      })
    
    const methods = this.restApi.root.addResource('test')

    methods.addMethod("POST", new LambdaIntegration(this.lambdaFunction, {}))

    // Output the API Gateway endpoint URL
    new CfnOutput(this, "ApiEndpoint", {
      value: this.restApi.url ?? "No URL available",
    });
    
  }
}