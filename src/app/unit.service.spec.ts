import { UnitService, Post } from "./unit.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";

describe("UnitService", () => {
  let service: UnitService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [UnitService]
    });
    service = TestBed.get(UnitService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("be able to retrieve posts from the API via GET", () => {
    const dummyPosts: Post[] = [
      {
        userId: "1",
        id: 1,
        body: "Http Client",
        title: "Testing Angular Service"
      },
      {
        userId: "2",
        id: 2,
        body: "Hello World2",
        title: "Testing Angular Services"
      }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.ROOT_URl}/posts`);
    expect(request.request.method).toBe("GET");
    request.flush(dummyPosts);

    httpMock.verify();
  });
});
