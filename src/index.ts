export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;
    let isInsert: boolean = false;

    result = collection1;

    for(i = 0; i < collection2.length; i++){
        isInsert = false;
        for(j = 0; j < result.length; j++){
            if(result[j] >= collection2[i]){
                result.splice(j, 0, collection2[i]);
                isInsert = true;
                break;
            }
        }
        if(!isInsert){
            result.push(collection2[i]);
        }
        
    }

    for(i = 0; i < collection3.length; i++){
        isInsert = false;
        for(j = 0; j < result.length; j++){
            if(result[j] >= collection3[i]){
                result.splice(j, 0, collection3[i]);
                isInsert = true;
                break;
            }
        }
        if(!isInsert){
            result.push(collection3[i]);
        }
        
    }

    return result;
}
