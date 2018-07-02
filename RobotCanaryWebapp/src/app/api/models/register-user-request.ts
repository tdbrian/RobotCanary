/* tslint:disable */
import { UserEntity } from './user-entity';
export interface RegisterUserRequest {
  user: UserEntity;
  password: string;
}
