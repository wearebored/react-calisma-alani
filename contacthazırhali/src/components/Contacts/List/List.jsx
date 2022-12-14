import { useState } from "react";
import { contactEdit, idDelete } from "../../../redux/action/reducerAction";
import { DeleteIcon, EditIcon, Liste, SaveIcon } from "./list-styled";

function List({ data, dispatch }) {
  const [edit, setEdit] = useState(true);
  const [contactname, setContactname] = useState(data.name);
  const [contactphone, setContactphone] = useState(data.phone);
  const [contactgender, setContactgender] = useState(data.gender);
  return (
    <Liste>
      {edit ? (
        <p>{data.name}</p>
      ) : (
        <p>
          <input
            maxlength="12"
            onChange={(e) => setContactname(e.target.value)}
            value={contactname}
            type="text"
          />
        </p>
      )}
      {edit ? (
        <p>{data.phone}</p>
      ) : (
        <p>
          <input
            maxlength="12"
            onChange={(e) => setContactphone(e.target.value)}
            value={contactphone}
            type="text"
          />
        </p>
      )}
      {edit ? (
        <p>{data.gender}</p>
      ) : (
        <p>
          <select
            onChange={(e) => setContactgender(e.target.value)}
            defaultValue={contactgender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </p>
      )}

      <p>
        <DeleteIcon
          onClick={(e) => {
            if (e.nativeEvent.path[0].nodeName === "path") {
              console.log(e.nativeEvent.path[1].id);
              dispatch(idDelete(e.nativeEvent.path[1].id));
            } else if (e.nativeEvent.path[0].nodeName === "svg") {
              console.log(e.target.id);
              dispatch(idDelete(e.target.id));
            }
          }}
          id={data.id}
        />
      </p>
      <p>
        {edit ? (
          <EditIcon
            onClick={(e) => {
              setEdit(!edit);
              if (!edit) {
                if (e.nativeEvent.path[0].nodeName === "path") {
                  console.log(e.nativeEvent.path[1].id);
                  const id = e.nativeEvent.path[1].id;
                  dispatch(
                    contactEdit({
                      contactname,
                      contactphone,
                      contactgender,
                      id,
                    })
                  );
                } else if (e.nativeEvent.path[0].nodeName === "svg") {
                  console.log(e.target.id);
                  const id = e.target.id;
                  dispatch(
                    contactEdit({
                      contactname,
                      contactphone,
                      contactgender,
                      id,
                    })
                  );
                }
              }
            }}
            id={data.id}
          />
        ) : (
          <SaveIcon
            onClick={(e) => {
              setEdit(!edit);
              if (!edit) {
                if (e.nativeEvent.path[0].nodeName === "path") {
                  console.log(e.nativeEvent.path[1].id);
                  const id = e.nativeEvent.path[1].id;
                  dispatch(
                    contactEdit({
                      contactname,
                      contactphone,
                      contactgender,
                      id,
                    })
                  );
                } else if (e.nativeEvent.path[0].nodeName === "svg") {
                  console.log(e.target.id);
                  const id = e.target.id;
                  dispatch(
                    contactEdit({
                      contactname,
                      contactphone,
                      contactgender,
                      id,
                    })
                  );
                }
              }
            }}
            id={data.id}
          />
        )}
      </p>
    </Liste>
  );
}

export default List;
