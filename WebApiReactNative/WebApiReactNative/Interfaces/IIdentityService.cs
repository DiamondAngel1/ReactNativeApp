namespace WebApiReactNative.Interfaces
{
    public interface IIdentityService
    {
        Task<long> GetUserIdAsync();
    }
}
