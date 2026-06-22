# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service to Product profile/COMMON for Service to Product profile/Use Case
- **Diagram ID**: 163160
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    User[/"User"/]
    ADD_Remove_Service_Relation_to_Product_Profile(("{ADD}Remove Service Relation to Product Profile"))
    ADD_Add_Service_Relation_to_Product_Profile(("{ADD}Add Service Relation to Product Profile"))
    User --- ADD_Add_Service_Relation_to_Product_Profile
    User --- ADD_Remove_Service_Relation_to_Product_Profile
```
