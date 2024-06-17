# ts-localstack-sam

The purpose of this project is to see how SAM can be locally tested using localstack.</br>
There is no further implementation in this project other than setting up a lambda, api gateway and s3 bucket using SAM configuration and then deploying it locally via localstack.

# Pre-requisites

<li>Docker</br>
<li>Node 18.X</br>
<li>cdk cli</br>
<li>cdk local cli</p>

# Steps

<li>npm install</br>
<li>npm run localstack:up</br>
<li>samlocal deploy --all</br>

# Endpoint

After the local deploy, the HTTP REST endpoint can be determined using the output provided in the CLI similar to: </br>
http://localhost:4566/restapis/< dynamicValue >/prod/_user_request_/
