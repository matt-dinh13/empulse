# CLM-937 (CBL-1864) Enable to Change Disbursement Channel in Status Active

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-937 (CBL-1864) Enable to Change Disbursement Channel in Status Active
- **Diagram ID**: 103469
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Use_Case_Model_Checking_Terms_of_Loan_Service["Use Case Model : Checking Terms of Loan Service"]
    Access_Rights_Access_Rights["Access Rights : Access Rights"]
    REQ_1_System_enables_user_with_specific_privilege_access_rig["REQ#1 - System enables user with specific privilege (access right) to change disbursement channel for contracts in 'Active' status only"]
    Enable_to_change_disbursement_channel_in_status_Active["Enable to change disbursement channel in status 'Active'"]
    REQ_1_System_enables_user_with_specific_privilege_access_rig -->|unnamed| Enable_to_change_disbursement_channel_in_status_Active
    Access_Rights_Access_Rights -->|unnamed| REQ_1_System_enables_user_with_specific_privilege_access_rig
    Use_Case_Model_Checking_Terms_of_Loan_Service -->|unnamed| REQ_1_System_enables_user_with_specific_privilege_access_rig
```
