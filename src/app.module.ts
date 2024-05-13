import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModule } from './place/place.module';
import { FilesModule } from './files/files.module';
import { CommonModule } from './common/common.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { SeedModule } from './seed/seed.module';
import { Place } from './place/entities/place.entity';
import { InscritosModule } from './inscritos/inscritos.module';
import { ClasificadosModule } from './clasificados/clasificados.module';
import { GanadoresModule } from './ganadores/ganadores.module';
import { SalaModule } from './sala/sala.module';
import { Inscrito } from './inscritos/entities/inscrito.entity';
import { Clasificado } from './clasificados/entities/clasificado.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false,
    }),
    TypeOrmModule.forRoot({
      ssl: true,
      extra: {
        ssl: true ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Place, Inscrito, Clasificado],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PlaceModule,
    FilesModule,
    CommonModule,
    CloudinaryModule,
    SeedModule,
    InscritosModule,
    ClasificadosModule,
    GanadoresModule,
    SalaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
