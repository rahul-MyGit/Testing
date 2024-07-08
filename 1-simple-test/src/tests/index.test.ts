import { describe, expect, it } from "@jest/globals";
import { sum, mul, div} from "../index";

describe('sum module', () => { 
    it('adds 1 + 2 to equal 3', ()=>{
        expect(sum(1,2)).toBe(3);
    });

    it('adds -3 - 3 to equal -6', ()=>{
        expect(sum(-3,-3)).toBe(-6);
    });

});


describe('testing both multiply and divide functionality', () => {
    
    describe('multiply module', () => { 
        it('adds 1 * 2 to equal 2', ()=>{
            expect(mul(1,2)).toBe(2);
        });
    
        it('adds -3 * 3 to equal -9', ()=>{
            expect(mul(-3,3)).toBe(-9);
        });
        
    });

    describe('divide module', () => { 
        it('adds 1 * 2 to equal 2', ()=>{
            expect(div(-4,2)).toBe(-2);
        });
    
        it('adds -3 * 3 to equal -9', ()=>{
            expect(div(3,3)).toBe(1);
        });
        
    });
})
