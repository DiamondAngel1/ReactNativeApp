using Microsoft.AspNetCore.Mvc;

namespace WebApiReactNative.Models.Account;

public class RegisterModel
{
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public string Password { get; set; } = String.Empty;
    [FromForm]
    public IFormFile? ImageFile { get; set; } = null;
}
