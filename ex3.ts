// 定义 Person 的类型接口
interface Person {
    name: string;
    age: number;
    getName: () => string;
    setName: (name: string) => void;
    getAge: () => number;
    setAge: (age: number) => void;
    toString: () => string;
    equals: (otherPerson: Person) => boolean;
}

// 定义 Employee 的类型接口
interface Employee extends Person {
    salary: number;
    getSalary: () => number;
    setSalary: (salary: number) => void;
}

// 实现 Person 的工厂函数
const createPerson = (name: string, age: number): Person => {
    return {
        name,
        age,
        getName: function() { return this.name; },
        setName: function(newName: string) { this.name = newName; },
        getAge: function() { return this.age; },
        setAge: function(newAge: number) { this.age = newAge; },
        toString: function() { return `Person: ${this.name}, ${this.age}`; },
        equals: function(otherPerson: Person) { return this.name === otherPerson.name && this.age === otherPerson.age; }
    };
};

// 实现 Employee 的工厂函数
const createEmployee = (name: string, age: number, salary: number): Employee => {
    const personInstance = createPerson(name, age);
    return {
        ...personInstance,
        salary,
        getSalary: function() { return this.salary; },
        setSalary: function(newSalary: number) { this.salary = newSalary; },
        toString: function() { return `${personInstance.toString()}, Salary: ${this.salary}`; },
        equals: function(otherEmployee: Employee) {
            return personInstance.equals(otherEmployee as Person) && this.salary === otherEmployee.salary;
        }
    };
};

// 使用示例
const employee1 = createEmployee('Alice', 30, 50000);
console.log(employee1.toString()); // "Person: Alice, 30, Salary: 50000"
