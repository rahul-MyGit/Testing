import { describe, it, expect, vi } from 'vitest';
import request from "supertest";
import { app } from '../index';
import { prismaClient } from "../__mocks__/db";


//mockResolvedValue  || mockReturnedValue
vi.mock("../db");

describe("Test for sum function", () => {
    it("should return the sum of two numbers", async () => {

      // MOCK
        prismaClient.request.create.mockResolvedValue({
          id: 1,
          a: 1,
          b: 2,
          asnwer: 3,
          type: "sum"
        })

        //SPY
          vi.spyOn(prismaClient.request, "create");

        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
          });

          //SPYING
          expect(prismaClient.request.create).toHaveBeenCalledWith({
            data: {
              a: 1,
              b: 2,
              type: "Sum",
              answer: 3
            }
          })
          expect(prismaClient.request.create).toHaveBeenCalledOnce()
          expect(prismaClient.request.create).toHaveBeenCalledTimes(1);

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });
  
    it("should return 422 if input is very big", async () => {
      const res = await request(app).post("/sum").send({
        a: 10000000000000000000000000000000,
        b : 3
        });

      expect(res.body.message).toBe("Sorry we don't support big numbers");
      expect(res.statusCode).toBe(422);
    });
  
  });

  describe("Test for Multipication function", () => {
    it("should return the mul of two numbers", async () => {
        const res = await request(app)
          .post("/mul")
          .send({
            a: "0",
            b: "20"
          })
        expect(res.body.answer).toBe(0);
    });
  
    it("should return value even if input is negative", async () => {
      const res = await request(app).post("/mul").send({
        a: -2,
        b : 30
        });

      expect(res.body.answer).toBe(-60);
    });
  
  });