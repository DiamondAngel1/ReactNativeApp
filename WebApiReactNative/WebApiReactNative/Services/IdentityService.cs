using Microsoft.AspNetCore.Identity;
using WebApiReactNative.Entities.Identity;
using WebApiReactNative.Interfaces;

namespace WebApiReactNative.Services
{
    public class IdentityService(IHttpContextAccessor httpContextAccessor,
    UserManager<UserEntity> userManager) : IIdentityService
    {
        public async Task<long> GetUserIdAsync()
        {
            var email = httpContextAccessor.HttpContext?.User?.Claims.First()?.Value;
            if (string.IsNullOrEmpty(email))
                throw new UnauthorizedAccessException("User is not authenticated.");
            var user = await userManager.FindByEmailAsync(email);

            return user.Id;
        }
    }
}
