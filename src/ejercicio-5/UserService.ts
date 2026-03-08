export interface UserStorage {
  findById(id: string): {id: string; name: string} | null;
}

export class MySqlUserRepository implements UserStorage {
  findById(id: string): { id: string; name: string; } | null {
    if (Number(id) < 0) { return null; }
    return {id, name: "Ada"};
  }
}

export class UserService {
  private repo: UserStorage;
  constructor(repo: UserStorage) {
    this.repo = repo;
  }

  getUserName(id: string): string {
    const user = this.repo.findById(id);
    if (!user) throw new Error("User not found");
    return user.name.toUpperCase();
  }
}