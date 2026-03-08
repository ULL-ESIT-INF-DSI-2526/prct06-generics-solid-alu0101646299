import { describe, test, expect } from 'vitest';
import { UserService, MySqlUserRepository } from '../src/ejercicio-5/UserService';

describe('UserService', () => {
  const mySqlRepo: MySqlUserRepository = new MySqlUserRepository();
  const myUserService: UserService = new UserService(mySqlRepo);

  test('myUserService.getUserName("1")', () => {
    expect(myUserService.getUserName("1")).toBe("ADA");
  });

  test('myUserService.getUserName("-1")', () => {
    expect(() => myUserService.getUserName("-1")).toThrowError("User not found");
  });
});