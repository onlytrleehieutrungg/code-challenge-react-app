import React from "react";
import { Person } from "../../types/person";

type PersonProps = {
  person: Person;
};
export default function DisplayPerson({ person }: PersonProps) {
    console.log(person.age);
  return (
    <div>
      <div>DisplayPerson</div>
      <div>name: {person.name}</div>
      <div>age: {person.age}</div>

    </div>
  );
}
