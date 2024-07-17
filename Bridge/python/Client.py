from Vehicles import Vehicle, Car, Bike
from Workshops import Produce, Assemble

def main() -> None:
    vehicle1: Vehicle = Car(Produce(), Assemble())
    vehicle1.manufacture()
    
    vehicle2: Vehicle = Bike(Produce(), Assemble())
    vehicle2.manufacture()

if __name__ == "__main__":
    main()