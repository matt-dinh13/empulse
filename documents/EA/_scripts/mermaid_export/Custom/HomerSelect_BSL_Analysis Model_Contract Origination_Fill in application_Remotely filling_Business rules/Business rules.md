# Business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules
- **Diagram ID**: 147697
- **Elements**: 7
- **Connectors**: 2

```mermaid
graph TD
    Allowed_status_and_substatus_for_remote_application_IN_VN_ID["Allowed status and substatus for remote application - IN,VN,ID,PH"]
    Allowed_status_or_substatus_for_remote_application["Allowed status or substatus for remote application"]
    Attributes_used_for_searching["Attributes used for searching"]
    Get_client_s_remotely_created_applications_to_display["Get client's remotely created applications to display"]
    Salesroom_eligibility_to_create_the_contract_remotely["Salesroom eligibility to create the contract remotely"]
    Get_salesroom_by_operation["Get salesroom by operation"]
    Remotely_created_application_to_process["Remotely created application to process"]
    Get_client_s_remotely_created_applications_to_display -->|unnamed| Allowed_status_or_substatus_for_remote_application
    Allowed_status_and_substatus_for_remote_application_IN_VN_ID -->|unnamed| Allowed_status_or_substatus_for_remote_application
```
