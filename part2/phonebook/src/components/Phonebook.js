import React from "react";

const PhoneBook = ({ persons, showFilter }) => {
  const filterUpperCase = showFilter.toUpperCase();
  const newPersonArray = persons.filter(person => {
    const personInUpperCase = person.name.toUpperCase();
    return personInUpperCase.includes(filterUpperCase);
  });

  return newPersonArray.map(person => (
    <li key={person.name}>
      {person.name} {person.number}
    </li>
  ));
};

export default PhoneBook;