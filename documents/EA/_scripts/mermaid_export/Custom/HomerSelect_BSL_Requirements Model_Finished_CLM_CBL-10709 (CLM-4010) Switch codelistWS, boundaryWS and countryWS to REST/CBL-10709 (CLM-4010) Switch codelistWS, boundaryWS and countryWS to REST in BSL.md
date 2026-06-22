# CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10709 (CLM-4010) Switch codelistWS, boundaryWS and countryWS to REST in BSL
- **Diagram ID**: 144852
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    ADD_Get_codelists_and_bounderies["(ADD)Get codelists and bounderies"]
    BSL["BSL"]
    ADD_99_995_Synchronize_enumaration_tables["{ADD}99.995 Synchronize enumaration tables"]
    Time["Time"]
    CSD["CSD"]
    ADD_99_994_Synchronize_enumaration_tables["{ADD}99.994 Synchronize enumaration tables"]
    Codelist_Search_Codelist_Search["Codelist/Search : Codelist/Search"]
    BoundaryExt_Search_BoundaryExt_Search["BoundaryExt/Search : BoundaryExt/Search"]
    Boundary_Search_Boundary_Search["Boundary/Search : Boundary/Search"]
    CLM_4010_Integrate_CSD_REST_API_for_enumarations_synchroniza["CLM-4010 - Integrate CSD REST API for enumarations synchronization"]
    Time -->|unnamed| ADD_99_995_Synchronize_enumaration_tables
    BSL -->|unnamed| ADD_99_994_Synchronize_enumaration_tables
    ADD_99_994_Synchronize_enumaration_tables -->|unnamed| ADD_Get_codelists_and_bounderies
    ADD_99_995_Synchronize_enumaration_tables -->|unnamed| ADD_Get_codelists_and_bounderies
    ADD_Get_codelists_and_bounderies -->|unnamed| CSD
```
