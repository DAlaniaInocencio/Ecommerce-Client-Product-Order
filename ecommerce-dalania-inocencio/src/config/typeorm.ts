import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
dotenvConfig({ path: '.env.development' });
//  console.log(process.env); // Mostrará las variables de entorno cargadas

const config = {
  type: 'postgres',
  database: process.env.DB_NAME,

  // host: process.env.DB_HOST,   /**FORMA LOCAL */
  //host: 'postgresdb',           //  FORMA BASE DE DATOS DOCKER
  host: process.env.DB_HOST, // LO VA A TENER RENDER  va hascer conection base de datos: Hostname

  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  logging: true,
  synchronize: true, //A False en producción
  dropSchema: true, //A False en producciónn
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
