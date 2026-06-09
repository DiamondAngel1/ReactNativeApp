using Riok.Mapperly.Abstractions;
using WebApiReactNative.Entities.Identity;
using WebApiReactNative.Models.Account;
using WebApiReactNative.Models.Seeder;

namespace WebApiReactNative.Mapper;

[Mapper]
public partial class UserMapper
{
    [MapProperty(nameof(UsersSeederModel.Email), nameof(UserEntity.UserName))]
    public partial UserEntity UserSeederToUser(UsersSeederModel model);
    [MapProperty(nameof(UsersSeederModel.Email), nameof(UserEntity.UserName))]
    public partial UserEntity RegisterModelToUser(RegisterModel model);

}
