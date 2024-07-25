export interface Workshop {

    work(): void;

}

export class Produce implements Workshop {

    work() {
        console.log('Produced');
    }

}

export class Assemble implements Workshop {

    work() {
        console.log('Assembled')
    }

}