# ts-localstack-sam

The purpose of this project is to see how CDk can be locally tested using localstack.</br>
There is no further implementation in this project other than setting up a lambda, api gateway and s3 bucket using cdk and then deploying it locally via localstack.

# Pre-requisites

<li>Docker</br>
<li>Node 18.X</br>
<li>cdk cli</br>
<li>cdk local cli</p>

# Steps

<li>npm install</br>
<li>npm run localstack:up</br>
<li>cdk synth --all</br>
<li>cdklocal deploy --all</br>

# Endpoint

After the local deploy, the HTTP REST endpoint can be determined using the output provided in the CLI similar to: </br>
https://< dynamicValue >.execute-api.localhost.localstack.cloud:4566/dev/test
