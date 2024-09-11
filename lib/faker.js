import {faker} from '@faker-js/faker'

function createRandomCard(){
    return {
        name:faker.company.name(),
        
    }
}