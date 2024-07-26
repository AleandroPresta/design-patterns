from BeverageMakerTemplate import BeverageMaker, CoffeeMaker, TeaMaker

def main() -> None:
    print("Making tea...")
    teaMaker: BeverageMaker = TeaMaker()
    teaMaker.makeBeverage()
    
    print("\nMaking coffee...")
    coffeeMaker: BeverageMaker = CoffeeMaker()
    coffeeMaker.makeBeverage()


if __name__ == "__main__":
    main()