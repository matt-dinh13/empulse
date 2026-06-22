# Ticketing - Create ticket overview (with TypeSpecification)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Create ticket API usage
- **Diagram ID**: 160001
- **Elements**: 17
- **Connectors**: 17

```mermaid
classDiagram
    class Tickets["Tickets"]
    class TicketRequest["TicketRequest"]
    class ADD_TypeSpecifications["{ADD}TypeSpecifications"]
    class n_10_038_Get_ticket_type_specification_service["10.038 Get ticket type specification service"]
    class TypeSpecification["TypeSpecification"]
    class GetTypeSpecificationRequest["GetTypeSpecificationRequest"]
    class Create_ticket_Create_ticket_user_interface["Create ticket : Create ticket - user interface"]
    class n_10_024_Get_Ticket_Types_service["10.024 Get Ticket Types service"]
    class n_10_023_Get_Ticket_Categories_service["10.023 Get Ticket Categories service"]
    class n_10_020_Create_ticket_manually["10.020 Create ticket manually"]
    class MOD_10_022_Create_ticket_service["{MOD}10.022 Create ticket service"]
    class Ticket["Ticket"]
    class Type["Type"]
    class Category["Category"]
    class Ticketing["Ticketing"]
    class Types["Types"]
    class Categories["Categories"]
    Create_ticket_Create_ticket_user_interface --> n_10_020_Create_ticket_manually : unnamed
    Tickets ..> TicketRequest : unnamed
    Types ..> ADD_TypeSpecifications : unnamed
    ADD_TypeSpecifications ..> n_10_038_Get_ticket_type_specification_service : unnamed
    ADD_TypeSpecifications ..> TypeSpecification : unnamed
    ADD_TypeSpecifications ..> GetTypeSpecificationRequest : unnamed
    Types ..> n_10_024_Get_Ticket_Types_service : unnamed
    Ticketing ..> Tickets : unnamed
    Ticketing ..> Categories : /categories
    Tickets ..> MOD_10_022_Create_ticket_service : unnamed
    Tickets --> Ticket : unnamed
    Tickets --> Ticket : unnamed
    Types --> Type : unnamed
    Categories --> Category : unnamed
    Categories ..> Types : /{categoryCode}
    Categories ..> n_10_023_Get_Ticket_Categories_service : unnamed
    n_10_020_Create_ticket_manually ..> Ticketing : unnamed
```
