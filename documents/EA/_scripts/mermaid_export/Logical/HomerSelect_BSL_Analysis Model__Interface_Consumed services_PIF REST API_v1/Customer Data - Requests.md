# Customer Data - Requests

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1
- **Diagram ID**: 151925
- **Elements**: 10
- **Connectors**: 11

```mermaid
classDiagram
    class CIF_PIF["CIF/PIF"]
    class RemoveCustomerDataRequest["RemoveCustomerDataRequest"]
    class UpdateCustomerDataRequest["UpdateCustomerDataRequest"]
    class GetCustomerDataRequest["GetCustomerDataRequest"]
    class IdentificationCustomerDataRequest["IdentificationCustomerDataRequest"]
    class UpdateMode["UpdateMode"]
    class CreateCustomerDataRequest["CreateCustomerDataRequest"]
    class Projection["Projection"]
    class SearchCustomerDataRequest["SearchCustomerDataRequest"]
    class Customer_Data["Customer Data"]
    Customer_Data --> IdentificationCustomerDataRequest : unnamed
    Customer_Data --> UpdateCustomerDataRequest : unnamed
    Customer_Data --> CreateCustomerDataRequest : unnamed
    Customer_Data --> RemoveCustomerDataRequest : unnamed
    Customer_Data --> SearchCustomerDataRequest : unnamed
    Customer_Data --> GetCustomerDataRequest : unnamed
    SearchCustomerDataRequest --> Projection : unnamed
    CreateCustomerDataRequest --> UpdateMode : unnamed
    GetCustomerDataRequest --> Projection : unnamed
    UpdateCustomerDataRequest --> UpdateMode : unnamed
    CIF_PIF --> Customer_Data : /customer
```
