const getRandom = arr => {
     return Math.floor(Math.random() * arr.length);    
}

const generateEmployee = () => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const positions = ["Developer", "Designer", "Manager", "Analyst", "Tester"];
    const departments = ["IT", "HR", "Finance", "Marketing", "Sales"];
    const salaries = [50000, 60000, 70000, 80000, 90000];
    const isActiveOptions = [true, false];

    return {
        name: names[getRandom(names)],
        position: positions[getRandom(positions)],
        department: departments[getRandom(departments)],
        salary: salaries[getRandom(salaries)],
        isActive: isActiveOptions[getRandom(isActiveOptions)],
    };
}
export default generateEmployee;



