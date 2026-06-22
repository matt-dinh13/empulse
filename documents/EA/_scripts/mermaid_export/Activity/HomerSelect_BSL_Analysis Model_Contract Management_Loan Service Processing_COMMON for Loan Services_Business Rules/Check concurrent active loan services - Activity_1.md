# Check concurrent active loan services - Activity

```mermaid
graph TD
    el_1833402["Note"]
    Is_continuation_confirmed["Is continuation confirmed?"]
    Does_any_active_service_exist["Does any active service exist?"]
    Check_for_active_GP_GRP_service["Check for active GP/GRP service"]
    Show_MSG_GP_OR_GRP_ASSIGNED_TO_CONTRACT["Show MSG_GP_OR_GRP_ASSIGNED_TO_CONTRACT"]
    el_1833437["Synchronization"]
    Return_back_to_calling_UC["Return back to calling UC"]
    Set_result_FALSE["Set result: FALSE"]
    Set_result_TRUE["Set result:TRUE"]
    Is_ERR_replacing_confirmed["Is ERR replacing confirmed?"]
    Show_MSG_ERRequestAlreadyExists["Show MSG_ERRequestAlreadyExists"]
    Does_an_active_ERR_exist["Does an active ERR exist?"]
    Get_active_ER_Requests["Get active ER Requests"]
    Exist_Service_with_Type_in_FER_PER_CET_COP["Exist Service with Type in (FER, PER, CET, COP)?"]
    Get_active_loan_services_Contract_Service["Get active loan services (Contract Service)"]
    Check_start["Check start"]
    Is_continuation_confirmed -->|NO| Set_result_FALSE
    Check_for_active_GP_GRP_service -->|unnamed| Does_any_active_service_exist
    el_1833437 -->|unnamed| Check_for_active_GP_GRP_service
    Does_any_active_service_exist -->|unnamed| Show_MSG_GP_OR_GRP_ASSIGNED_TO_CONTRACT
    Is_ERR_replacing_confirmed -->|YES| el_1833437
    Does_an_active_ERR_exist -->|NO| el_1833437
    Exist_Service_with_Type_in_FER_PER_CET_COP -->|NO| el_1833437
    Set_result_FALSE -->|unnamed| Return_back_to_calling_UC
    Show_MSG_GP_OR_GRP_ASSIGNED_TO_CONTRACT -->|unnamed| Is_continuation_confirmed
    Is_ERR_replacing_confirmed -->|NO| Set_result_FALSE
    Check_start -->|unnamed| Get_active_loan_services_Contract_Service
    Is_continuation_confirmed -->|YES| Set_result_TRUE
    Does_any_active_service_exist -->|NO| Set_result_TRUE
    Show_MSG_ERRequestAlreadyExists -->|unnamed| Is_ERR_replacing_confirmed
    Does_an_active_ERR_exist -->|YES| Show_MSG_ERRequestAlreadyExists
    Get_active_ER_Requests -->|unnamed| Does_an_active_ERR_exist
    Exist_Service_with_Type_in_FER_PER_CET_COP -->|YES| Get_active_ER_Requests
    Get_active_loan_services_Contract_Service -->|unnamed| Exist_Service_with_Type_in_FER_PER_CET_COP
    Set_result_TRUE -->|unnamed| Return_back_to_calling_UC
```
