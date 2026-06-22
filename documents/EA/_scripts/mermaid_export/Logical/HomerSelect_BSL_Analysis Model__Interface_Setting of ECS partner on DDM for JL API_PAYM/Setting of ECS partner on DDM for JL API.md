# Setting of ECS partner on DDM for JL API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Setting of ECS partner on DDM for JL API/PAYM
- **Diagram ID**: 113126
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Setting_of_ECS_partner_on_DDM_for_JL_API["Setting of ECS partner on DDM for JL API"]
    class getECSPartnerRespnse["getECSPartnerRespnse"]
    class getECSPartnerRequest["getECSPartnerRequest"]
    class Get_ECS_Partner_for_JL_contract["Get ECS Partner for JL contract"]
    class ECS_partners["ECS partners"]
    ECS_partners o-- Get_ECS_Partner_for_JL_contract : unnamed
    Get_ECS_Partner_for_JL_contract ..> getECSPartnerRequest : unnamed
    Get_ECS_Partner_for_JL_contract ..> getECSPartnerRespnse : unnamed
```
