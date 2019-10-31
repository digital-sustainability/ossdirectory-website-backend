import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: Record<string, string>;


  get(key: string): string {
    return this.envConfig[key];
  }
}