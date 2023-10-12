function compareArrays(arr1, arr2) {

  return arr1.length === arr2.length && arr1.every((element, index) => arr2[index] === element);

}

function getUsersNamesInAgeRange(users, gender) {
  if(!users || users.length == 0) return 0;

  const usersAge = users.filter(element => element.gender === gender).map(element => element.age);
  if(usersAge.length == 0) return 0;

  return usersAge.reduce((sum, age) => sum + age, 0)/usersAge.length;
  
}