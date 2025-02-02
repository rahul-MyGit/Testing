import {describe, expect, it, vi} from 'vitest';
import request from "supertest";
import { app } from "../index"

//MOKING THE DB. BUT HAVE FEW FLAWS : 
// vi.mock('../db' , ()=>({
//   prismaClient: {
//     sum : {                  // Tables
//       create: vi.fn(),        //vi.fn is an empty function
//       findMany: vi.fn()
//     },
//     user: {                  // Tables
//       findMany: vi.fn(),      //function that exists inside a Table
//       create: vi.fn(),
//       update: vi.fn(),
//       delete: vi.fn(),
//       findUnique: vi.fn()
//     }
//   }
// }));


//DEEP MOCKING    || autoatically use __mock__/db.ts file  and NOT ../db.ts
vi.mock('../db');

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});


describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app)
        .get("/sum")
        .set({
          a: "1",
          b: "2"
        })
        .send();
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app)
      .get("/sum").send();
    expect(res.statusCode).toBe(411);
  });

});
