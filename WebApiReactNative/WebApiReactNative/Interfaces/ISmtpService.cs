using WebApiReactNative.Smtp;

namespace WebApiReactNative.Interfaces
{
    public interface ISmtpService
    {
        Task<bool> SendEmailAsync(MyEmailMessage message);
    }
}
