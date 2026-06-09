using WebApiReactNative.Entities.Identity;

namespace WebApiReactNative.Interfaces
{
    public interface IJwtTokenService
    {
        Task<string> CreateTokenAsync(UserEntity user);
    }
}
