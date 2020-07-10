export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51H2QNlJqdiwdYo5w80EVPQmV0uZRSuzMhDDriU75shXvF5l9swuJZOxpdGOHBeBtoNDFerTvxSzhQZPM43KDP9gD00yt5S8DH5",
    s3: {
        REGION: "us-east-1",
        BUCKET: "paul-epps-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://p0pidgyawj.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_djX0jnfTR",
        APP_CLIENT_ID: "4s7r9o2ncop8m7sbkem9tnqbap",
        IDENTITY_POOL_ID: "us-east-1:d2e00964-f435-4466-b2ca-f82a50494a31"
    },
    social: {
        FB: "697289960839972"
    }
};