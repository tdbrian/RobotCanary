using System.Threading.Tasks;
using RobotCanary.Users;

namespace RobotCanary.ExternalServices.Okta
{
    public interface IAuthUserManager
    {
        Task AddUser(UserEntity user, string password);
    }
}