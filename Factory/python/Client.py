from Factories import Factory, TwoWheelerFactory, FourWheelerFactory
from Vehicles import Vehicle, TwoWheeler, FourWheeler

def main() -> None:
    two_wheeler_factory: Factory = TwoWheelerFactory()
    two_wheeler: Vehicle = two_wheeler_factory.create_vehicle()
    two_wheeler.print_vehicle()
    
    four_wheeler_factory: Factory = FourWheelerFactory()
    four_wheeler: Vehicle = four_wheeler_factory.create_vehicle()
    four_wheeler.print_vehicle()
    
if __name__ == "__main__":
    main()