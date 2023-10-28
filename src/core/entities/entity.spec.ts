import { Entity } from "./Entity";

test("id is in uuid format", ()=>{
    const entity = new Entity();

    //uuid has 36 characters
    expect(entity.id.length).toEqual(36);
    //uuid has 4 -
    expect(entity.id.split("-").length - 1).toEqual(4);
})

test("id is not equal for more than 1 Entities", ()=>{
    const entity1 = new Entity();
    const entity2 = new Entity();

    expect(entity1.id).not.toEqual(entity2.id);
})