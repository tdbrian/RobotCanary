using System.Threading.Tasks;
using FlaskStudio.Users;

namespace FlaskStudio.ExternalServices.Okta
{
    public interface IAuthUserManager
    {
        Task AddUser(UserEntity user, string password);
    }
}