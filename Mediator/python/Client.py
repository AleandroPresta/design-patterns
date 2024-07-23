from Airplane import Airplane, CommercialAirplane, AirTrafficControlTower, AirportControlTower

def main() -> None:
    control_tower: AirTrafficControlTower = AirportControlTower()
    
    airplane1: Airplane = CommercialAirplane(control_tower)
    airplane2: Airplane = CommercialAirplane(control_tower)
    
    airplane1.request_takeoff()
    airplane2.request_landing()
    

if __name__ == '__main__':
    main()