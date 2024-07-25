"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    construct(builder) {
        builder.build_cpu();
        builder.build_ram();
        builder.build_storage();
    }
}
exports.Director = Director;
