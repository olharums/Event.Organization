import {
  createEmployee,
  deleteEmployee,
  editEmployee,
  fetchEmployees,
} from "../../../shared/api/employeesAPI";
import {
  createEvent,
  deleteEvent,
  editEvent,
  fetchEvents,
} from "../../../shared/api/eventsAPI";
import {
  createOrder,
  createReport,
  deleteOrder,
  editOrder,
  fetchOrders,
} from "../../../shared/api/ordersAPI";
import {
  createTaxation,
  deleteTaxation,
  editTaxation,
  fetchTaxations,
} from "../../../shared/api/taxationsAPI";
import { fetchAllUsers } from "../../../shared/api/usersAPI";

export const getEvents = () => ({
  fetchData: fetchEvents,
  createRecord: createEvent,
  editRecord: editEvent,
  deleteRecord: deleteEvent,
  columnNames: [
    "id",
    "name",
    "price",
    "background",
    "description",
    "img",
    "imgExample1",
    "imgExample2",
    "imgExample3",
    "size",
  ],
  tableName: "events",
});

export const getEmployees = () => ({
  fetchData: fetchEmployees,
  createRecord: createEmployee,
  editRecord: editEmployee,
  deleteRecord: deleteEmployee,
  columnNames: [
    "id",
    "name",
    "surname",
    "category",
    "eventId",
    "salary",
    "img",
    "bio",
  ],
  tableName: "employees",
});

export const getTaxations = () => ({
  fetchData: fetchTaxations,
  createRecord: createTaxation,
  editRecord: editTaxation,
  deleteRecord: deleteTaxation,
  columnNames: ["id", "percent", "eventId"],
  tableName: "taxations",
});

export const getOrders = () => ({
  fetchData: fetchOrders,
  createRecord: createOrder,
  editRecord: editOrder,
  deleteRecord: deleteOrder,
  createReport: createReport,
  columnNames: [
    "id",
    "date",
    "eventId",
    "employeeId",
    "price",
    "taxationId",
    "publicAccess",
    "address",
    "userId",
  ],
  tableName: "orders",
});

export const getUsers = () => ({
  fetchData: fetchAllUsers,
  createRecord: null,
  editRecord: null,
  deleteRecord: null,
  columnNames: ["id", "surname", "name", "phone", "password", "isAdmin"],
  tableName: "users",
});
