import { Builder, GamingComputerBuilder, OfficeComputerBuilder } from './Builder';
import { Director } from './Director';
import { Computer } from './Computer';

const gaming_computer_builder: Builder = new GamingComputerBuilder();
const director: Director = new Director();

director.construct(gaming_computer_builder);
const gaming_computer: Computer = gaming_computer_builder.get_result();

gaming_computer.display_info();

const office_computer_builder: Builder = new OfficeComputerBuilder();

director.construct(office_computer_builder);
const office_computer: Computer = office_computer_builder.get_result();

office_computer.display_info();