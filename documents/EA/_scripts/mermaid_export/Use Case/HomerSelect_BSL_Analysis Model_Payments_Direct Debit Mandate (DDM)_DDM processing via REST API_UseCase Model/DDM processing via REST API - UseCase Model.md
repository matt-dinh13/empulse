# DDM processing via REST API - UseCase Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/UseCase Model
- **Diagram ID**: 158056
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph LR
    n_14_436_PUT_ECSProvider_Update_ECS_provider_for_direct_debi(("14.436 PUT ECSProvider (Update ECS provider for direct debit mandate or direct debit mandate draft)"))
    n_14_434_PUT_DDMOrDraft_Update_direct_debit_mandate_or_direc(("14.434 PUT DDMOrDraft (Update direct debit mandate or direct debit mandate draft)"))
    n_14_435_POST_ValidateDDM_Validate_direct_debit_mandate_data(("14.435 POST ValidateDDM (Validate direct debit mandate data)"))
    n_14_433_POST_Draft_Create_direct_debit_mandate_draft(("14.433 POST Draft (Create direct debit mandate draft)"))
    External_system[/"External system"/]
    n_14_432_POST_DDM_Create_and_validate_direct_debit_mandate(("14.432 POST DDM (Create and validate direct debit mandate)"))
    n_14_431_GET_DDM_Get_direct_debit_mandates_based_on_filters(("14.431 GET DDM (Get direct debit mandates based on filters)"))
    n_14_434_PUT_DDMOrDraft_Update_direct_debit_mandate_or_direc --- External_system
    External_system --- n_14_435_POST_ValidateDDM_Validate_direct_debit_mandate_data
    External_system --- n_14_431_GET_DDM_Get_direct_debit_mandates_based_on_filters
    External_system --- n_14_433_POST_Draft_Create_direct_debit_mandate_draft
    External_system --- n_14_432_POST_DDM_Create_and_validate_direct_debit_mandate
```
