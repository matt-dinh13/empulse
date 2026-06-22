# CSI-2979 Process Account EoM billing notification

```mermaid
graph TD
    Use_Case_Model_Deal_Period_prolongation_Use_Case_Model["Use Case Model : Deal Period prolongation - Use Case Model"]
    ADD_11_070_Prolong_Deal_Period_VAS["{ADD}11.070 Prolong Deal Period (VAS)"]
    n_11_773_Process_account_EOM_billing_finished_notification["11.773 Process account EOM billing finished notification"]
    n_11_081_Prolong_insurance_contracts["11.081 Prolong insurance contracts"]
    n_01_739_Process_Account_Balance_Change_EOM_notification["01.739 Process Account Balance Change EOM notification"]
    Time["Time"]
    n_08_214_Prolong_Service_Period_on_defined_time["08.214 Prolong Service Period on defined time"]
    n_08_210_Prolong_Service_Period_on_EoM_billing_COS["08.210 Prolong Service Period on EoM billing (COS)"]
    VAS_Deal["VAS Deal"]
    n_08_212_Prolong_Service_Period_on_AccountBalanceChange_COS["08.212 Prolong Service Period on AccountBalanceChange (COS)"]
    AM["AM"]
    Time -->|unnamed| n_08_214_Prolong_Service_Period_on_defined_time
    VAS_Deal -->|unnamed| n_08_212_Prolong_Service_Period_on_AccountBalanceChange_COS
    VAS_Deal -->|unnamed| n_08_210_Prolong_Service_Period_on_EoM_billing_COS
    VAS_Deal -->|unnamed| n_08_214_Prolong_Service_Period_on_defined_time
    AM -->|unnamed| n_08_210_Prolong_Service_Period_on_EoM_billing_COS
    AM -->|unnamed| n_08_212_Prolong_Service_Period_on_AccountBalanceChange_COS
```
