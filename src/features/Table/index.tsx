import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { MdDangerous } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import AddRecordModal from "../../entities/AddRecordModal";
import EditRecordModal from "../../entities/EditRecordModal";
import CheckModal from "../../entities/CheckModal";
import { IData } from "../../shared/types/IData";
import { ITable } from "../../shared/types/ITable";

import { EmptyContainer } from "../../shared/ui/ContainersStyle";
import { ButtonContainer, StyledButton, StyledTable } from "./styles";

const DataTable: FC<{
  table: ITable;
  addModalShow: boolean;
  setAddModalShow: (show: boolean) => void;
}> = ({ table, addModalShow, setAddModalShow }) => {
  const [[modalShow, id], setModalShow] = useState<[boolean, string | number]>([
    false,
    -1,
  ]);

  const [editModalShow, setEditModalShow] = useState<boolean>(false);

  const [data, _setData] = useState<any[]>([]);
  const [valuesDefault, setValuesDefault] = useState<any>({});

  const setData = (data: any[]) => {
    data = data.sort((a, b) => a.id - b.id);
    _setData(data);
  };

  useEffect(() => {
    table
      .fetchData()
      .then((response: any) => {
        setData(response.rows);
      })
      .catch((err: any) => console.error(err));
  }, [table.fetchData]);

  if (!data.length) {
    return (
      <EmptyContainer
        style={{ marginBottom: table?.columnNames?.length ? "44hv" : "54.1vh" }}
      >
        <AddRecordModal
          addModalShow={addModalShow}
          setAddModalShow={setAddModalShow}
          table={table}
          setData={setData}
        />
      </EmptyContainer>
    );
  }

  return (
    <>
      <StyledTable className={`table table-striped ${table.tableName}`}>
        <thead>
          <tr className="text-center">
            {table.columnNames.map((colName) => (
              <th key={colName}>{colName}</th>
            ))}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.length &&
            data.map((record) => (
              <tr key={record.id}>
                {table.columnNames?.map((colName) => (
                  <td className="text-center" key={colName}>
                    {record[colName]?.toString()}
                  </td>
                ))}
                {table.editRecord && table.deleteRecord && (
                  <td className="text-center">
                    <ButtonContainer>
                      <StyledButton
                        variant="warning"
                        onClick={() => {
                          setValuesDefault(
                            data.find((rec) => rec.id == record.id)
                          );
                          setEditModalShow(true);
                        }}
                      >
                        Изменить
                      </StyledButton>

                      <StyledButton
                        variant="danger"
                        onClick={() => setModalShow([true, record.id])}
                      >
                        Удалить
                      </StyledButton>
                    </ButtonContainer>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </StyledTable>
      <AddRecordModal
        addModalShow={addModalShow}
        setAddModalShow={setAddModalShow}
        table={table}
        setData={setData}
      />
      <EditRecordModal
        editModalShow={editModalShow}
        setEditModalShow={setEditModalShow}
        valuesDefault={valuesDefault}
        table={table}
        setData={setData}
      />
      <CheckModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        clickHandler={async () => {
          await table.deleteRecord(id);

          table
            .fetchData()
            .then((data: IData<any>) => setData(data.rows))
            .catch((err: any) => console.error(err));
        }}
      >
        <Container className="text-center">
          <MdDangerous size={"5rem"} style={{ fill: "red" }} />

          <h2>Удалить запись?</h2>
        </Container>
      </CheckModal>
    </>
  );
};
export default DataTable;
