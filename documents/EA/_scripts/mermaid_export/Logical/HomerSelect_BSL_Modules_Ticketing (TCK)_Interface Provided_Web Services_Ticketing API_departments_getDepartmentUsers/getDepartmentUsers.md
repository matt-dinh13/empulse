# getDepartmentUsers

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/departments/getDepartmentUsers
- **Diagram ID**: 159969
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class n_10_038_Get_department_users["10.038 Get department users"]
    class n_200["200"]
    class ADD_DepartmentUser["{ADD}DepartmentUser"]
    class n_400["400"]
    class ADD_GetDepartmentUsersRequest["{ADD}GetDepartmentUsersRequest"]
    class departments_departmentCode_users["/departments/{departmentCode}/users"]
    departments_departmentCode_users ..> ADD_GetDepartmentUsersRequest : unnamed
    departments_departmentCode_users ..> n_400 : unnamed
    departments_departmentCode_users ..> ADD_DepartmentUser : unnamed
```
