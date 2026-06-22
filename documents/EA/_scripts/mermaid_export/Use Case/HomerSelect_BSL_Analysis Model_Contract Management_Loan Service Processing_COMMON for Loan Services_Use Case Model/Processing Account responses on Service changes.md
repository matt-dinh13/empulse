# Processing Account responses on Service changes

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model
- **Diagram ID**: 164584
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph LR
    CaBus_AM[/"CaBus-AM"/]
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    n_08_294_Process_Account_response_on_Contract_Service_notifi(("08.294 Process Account response on Contract Service notifications"))
    Account_Notifications_REL_Consumed_messages_Process_Service_["Account Notifications (REL) : Consumed messages - Process Service Operation Notification"]
    CaBus_AM --> n_08_294_Process_Account_response_on_Contract_Service_notifi
    Account_Notifications_REL_Consumed_messages_Process_Service_ -->|unnamed| n_08_294_Process_Account_response_on_Contract_Service_notifi
```
