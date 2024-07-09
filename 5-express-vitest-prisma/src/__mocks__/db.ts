import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";

export const prismaClient = mockDeep<PrismaClient>();

//Deep mock : mock every table and whatever functions they have
//this file will be picked by index.test.ts by calling '../db' 

// Rule of Thumb is : make __mock__ folder at the same directory as db.ts file