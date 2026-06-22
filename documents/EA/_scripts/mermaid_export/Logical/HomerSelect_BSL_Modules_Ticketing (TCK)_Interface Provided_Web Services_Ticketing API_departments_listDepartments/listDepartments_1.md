# listDepartments

```mermaid
classDiagram
    class n_10_025_List_departments["10.025 List departments"]
    class ErrorMessageRest["ErrorMessageRest"]
    class n_200["200"]
    class n_400["400"]
    class departments["/departments"]
    class ADD_GetDepartmentRequest["{ADD}GetDepartmentRequest"]
    class Department["Department"]
    departments --> Department : unnamed
    departments --> ADD_GetDepartmentRequest : unnamed
    departments --> ErrorMessageRest : unnamed
```
