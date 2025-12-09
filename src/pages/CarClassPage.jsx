function CarClassPage() {
  // Car class example
  class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    displayInfo() {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  }

  class ElectricCar extends Car {
    constructor(brand, model, year, batteryLife) {
      super(brand, model, year);
      this.batteryLife = batteryLife;
    }
    displayInfo() {
      return `${super.displayInfo()} - Battery: ${this.batteryLife} hours`;
    }
  }

  const cars = [
    new Car("Toyota", "Corolla", 2023),
    new ElectricCar("Tesla", "Model S", 2022, 24),
    new Car("Honda", "Civic", 2021),
    new ElectricCar("Nissan", "Leaf", 2023, 18)
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Car Classes Example</h1>
      <p className="text-gray-600 mb-8">
        Demonstrating Object-Oriented Programming with Car and ElectricCar classes
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cars.map((car, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <div className="text-4xl mb-3">
              {car.batteryLife ? '⚡🚗' : '🚗'}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-600 mb-2">Year: {car.year}</p>
            {car.batteryLife && (
              <p className="text-green-600 font-semibold">
                🔋 Battery Life: {car.batteryLife} hours
              </p>
            )}
            <p className="mt-3 text-sm text-gray-500 italic">
              Type: {car.batteryLife ? 'Electric Car' : 'Regular Car'}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Code Example:</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

class ElectricCar extends Car {
  constructor(brand, model, year, batteryLife) {
    super(brand, model, year);
    this.batteryLife = batteryLife;
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export default CarClassPage
