let env = 'prod';

switch(env){
    case 'dev':
        console.log("Environment: DEV Base URL: https://dev-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: DevEnv");
        break;
	case 'staging':
		console.log("Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror");
		break;
	case 'qa':
		console.log("Environment: QLAB Base URL: https://qa-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Testing env");
		break;
	case 'prod':
		console.log("Environment: PROD Base URL: https://prod-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Prod env");
		break;
}