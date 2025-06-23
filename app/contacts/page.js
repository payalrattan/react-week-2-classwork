import { CONTACT_LIST } from "@/data/contactsList";

export default function Contacts() {
  return (
    <div>
      {CONTACT_LIST.map((contact, i) => {
        return (
          <div key={i}>
            <h4>Name:{contact.name}</h4>
            <p>Age:{contact.age}</p>
           <p>Are you employed: {contact.isEmployed ? "Yes" : "No"}</p>

          </div>
        );
      })}
    </div>
  );
}
