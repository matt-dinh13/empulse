# CBL-1696 - New SystemCode LP - AccountTransactionWS 

```mermaid
graph TD
    Communication_tables_REL_Account_Transactions_Communication_["Communication tables : REL Account Transactions - Communication tables"]
    IncomingPaymentSourceSystem_to_HoSel_value_mapping["IncomingPaymentSourceSystem to HoSel value mapping"]
    el_1207005["Note"]
    Logical_Data_Model_COMMON_for_CBSA_LDM["Logical Data Model : COMMON for CBSA - LDM"]
    Communication_Model_REL_Payment_Pairing_Communication_Model["Communication Model : REL Payment Pairing - Communication Model"]
    el_1207005 -->|unnamed| IncomingPaymentSourceSystem_to_HoSel_value_mapping
    Communication_tables_REL_Account_Transactions_Communication_ -->|unnamed| el_1207005
    el_1207005 -->|unnamed| Logical_Data_Model_COMMON_for_CBSA_LDM
    el_1207005 -->|unnamed| Communication_Model_REL_Payment_Pairing_Communication_Model
```
