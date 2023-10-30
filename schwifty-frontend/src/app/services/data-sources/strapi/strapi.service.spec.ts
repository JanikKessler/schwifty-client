import {TestBed} from '@angular/core/testing';

import {StrapiService} from './strapi.service';
import {StrapiResponse} from "../../../model/strapi/StrapiResponse";

describe('AirtableService', () => {
  let service: StrapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiService);
  });

  it('should be created', () => {

    const startJson: StrapiResponse = {
      data: [
        {
          id: 2,
          attributes: {
            name: "Jonas Malta",
            description: "Schwifty Blues / Laidback Indie",
            established: 2016,
            createdAt: "2023-08-12T16:35:47.532Z",
            updatedAt: "2023-10-05T14:26:02.428Z",
            publishedAt: "2023-08-12T17:25:28.420Z"
          }
        },
        {
          id: 1,
          attributes: {
            name: "Modus",
            description: "MODUS sind ein Multiinstrumental-Duo mit elektronischen Drums. Die beiden nehmen euch mit auf eine Reise durch verschiedenste musikalische Landschaften fern von Genregrenzen. 808, Kalimba, Triangel, Melodica, Synthie, Gitarre, Bass und ihre Stimmen sind die Fortbewegungsmittel auf diesem klanglichen Trip, der den Geist zu ausschweifender Träumerei anregt ohne dabei den Körper zu vergessen. Ihr Sound verneigt sich gleichermaßen vor psychedelischen Helden wie Jimi Hendrix und Pink Floyd und aktuellen elektronischen Acts wie Caribou, Bonobo oder Chet Faker. Die beiden bedienen sich zwar der digitalen Welt um die Begrenzung auf vier Hände aufzuheben und ihren Ideen freien Lauf zu geben, aber bis auf die Drums entstehen alle Sounds live und organisch auf der Bühne. Keine Samples oder vorproduzierte Loops, dafür umso mehr Experimentierfreude und Liebe zum Detail.",
            established: 2015,
            createdAt: "2023-08-12T16:32:33.703Z",
            updatedAt: "2023-10-05T14:26:25.453Z",
            publishedAt: "2023-08-12T16:37:11.530Z"
          }
        }
      ],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: 2
        }
      }
    }

    const result = service.getDataFromStrapi(startJson);
    console.log(result)
  })
});
