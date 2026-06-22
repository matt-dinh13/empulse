# CSI-1119 Use DMS in UC 08.356 Generate service request document

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions/CSI-1119 Use DMS in UC 08.356 Generate service request document
- **Diagram ID**: 148945
- **Elements**: 11
- **Connectors**: 0

```mermaid
graph LR
    MOD_08_273_Create_CET_request_common(("{MOD}08.273 Create CET request common"))
    MOD_08_257_Create_Cooling_off_period_request(("{MOD}08.257 Create Cooling-off period request"))
    MOD_08_064_Create_request_for_change_due_date_common(("{MOD}08.064 Create request for change due date common"))
    MOD_08_358_Create_request_for_payment_holiday_common(("{MOD}08.358 Create request for payment holiday common"))
    n_08_051_Create_PER_request_common(("08.051 Create PER request common"))
    n_03_052_Create_Full_Early_repayment_request(("03.052 Create Full Early repayment request"))
    Set_parameters_for_file_upload["Set parameters for file upload"]
    DMS_File_creation_rule["DMS File creation rule"]
    Generate_printout_of_document["Generate printout of document "]
    n_08_356_Generate_service_request_document_v2(("08.356 Generate service request document v2"))
    n_08_356_Generate_service_request_document(("08.356 Generate service request document"))
```
