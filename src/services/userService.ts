import { injectable } from 'tsyringe'

@injectable()
export class UserService {
	async authenticate(username: string, password: string): Promise<any> {}
}
