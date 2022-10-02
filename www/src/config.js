// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7jjtq8jprqqmujjqh3ul42hg38",     // CognitoClientID
  "api_base_url": "https://j79x1g8ewg.execute-api.ap-northeast-1.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-dev-stack.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d114cpwqtbts2e.amplifyapp.com"                                      // AmplifyURL
};

export default config;
