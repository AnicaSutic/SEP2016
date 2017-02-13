using System.Collections.Generic;
using PayPal.Api;

namespace PCC.Business
{
    public static class PaypalConfiguration
    {
        public static readonly string ClientId;
        public static readonly string ClientSecret;
        public static readonly string RedirectUrl;
        public static readonly string CancelUrl;

        static PaypalConfiguration()
        {
            var config = GetConfig();
            ClientId = config["clientId"];
            ClientSecret = config["clientSecret"];
            RedirectUrl = config["redirectUrl"];
            CancelUrl = config["cancelUrl"];
        }

        private static Dictionary<string, string> GetConfig()
        {
            return ConfigManager.Instance.GetProperties();
        }

        public static string GetAccessToken()
        {
            string accessToken = new OAuthTokenCredential(ClientId, ClientSecret, GetConfig()).GetAccessToken();
            return accessToken;
        }

        public static APIContext GetApiContext()
        {
            APIContext apiContext = new APIContext(GetAccessToken());
            apiContext.Config = GetConfig();
            return apiContext;
        }
    }
}