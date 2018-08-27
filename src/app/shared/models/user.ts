import { ProgrammingLanguage } from '@coder/shared/models/programming-language';

export interface User {
  id: number;
  userName: string;
  avatar?: string;
  bio?: string;
  email?: string;
  github?: string;
  programmingLanguages?: ProgrammingLanguage[];
}
