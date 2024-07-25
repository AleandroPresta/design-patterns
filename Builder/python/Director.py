from Builder import Builder

class Director:
    def construct(self, builder: Builder) -> None:
        builder.build_cpu()
        builder.build_ram()
        builder.build_storage()