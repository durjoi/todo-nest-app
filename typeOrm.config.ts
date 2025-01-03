import * as dotenv from 'dotenv';
import { Task } from './src/task/entities/task.entity';
import { DataSource } from 'typeorm';

dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Task],
  migrationsTableName: 'typeorm_migrations',
  migrations: ['src/task/database/migrations/*.ts'],
});
