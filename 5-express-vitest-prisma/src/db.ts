import { PrismaClient } from '@prisma/client/edge'
export const prismaClient = new PrismaClient()



/* When ever someones call prismaClient and done something
   then instead of doing a DB call it should create a function 
   /skeleton which is empty. 
        export const prismaClient2 = {
            sum: {
                craate: () => {
                
                }
            }
        }

    Above is how it should it should look like
   */