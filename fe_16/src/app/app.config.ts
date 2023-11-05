import { ApplicationConfig } from '@angular/core';
import {provideRouter, withInMemoryScrolling, withRouterConfig} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {Connector} from "./services/data-sources/Connector";
import {StrapiConnectorService} from "./services/data-sources/strapi/strapi-connector.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {provide: Connector, useClass: StrapiConnectorService},
    provideRouter(routes, withInMemoryScrolling({anchorScrolling: 'enabled'}))]
};
