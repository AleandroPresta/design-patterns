import { Builder } from "./Builder";

export class Director {

    construct(builder: Builder): void {
        builder.build_cpu();
        builder.build_ram();
        builder.build_storage();
    }

}