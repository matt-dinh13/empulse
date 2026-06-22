# Financing Package UC

```mermaid
graph TD
    CalculateSubvention_CalculateSubvention["CalculateSubvention : CalculateSubvention"]
    n_04_419_Calculate_Subvention["04.419 Calculate Subvention"]
    DEL_04_418_Get_Subvention_Scheme["{DEL}04.418 Get Subvention Scheme"]
    CancelFinancingPackage_validation_rules["CancelFinancingPackage - validation rules"]
    DEL_04_417_Cancel_Financing_Package["{DEL}04.417 Cancel Financing Package"]
    GetVersionedEntity_search_filter["GetVersionedEntity - search filter"]
    GetVersionedEntityCriterionValue_validation_rules["GetVersionedEntityCriterionValue - validation rules"]
    DEL_04_415_Get_Financing_Package_Code_Lists["{DEL}04.415 Get Financing Package Code Lists"]
    Validation_Rules_Financing_Package_Values_validation_rules["Validation Rules : Financing Package Values - validation rules"]
    GetFinancingPackage_search_filter["GetFinancingPackage - search filter"]
    GetFinancingPackageRequest_validation_rules["GetFinancingPackageRequest - validation rules"]
    MOD_FinancingPackageValues_validation_rules["{MOD}FinancingPackageValues - validation rules"]
    UpdateFinancingPackage_validation_rules["UpdateFinancingPackage - validation rules"]
    ActivateFinancingPackage_validation_rules["ActivateFinancingPackage - validation rules"]
    CreateFinancingPackage_validation_rules["CreateFinancingPackage - validation rules"]
    DEL_04_414_Activate_Financing_Package["{DEL}04.414 Activate Financing Package"]
    DEL_04_412_Get_Financing_Package["{DEL}04.412 Get Financing Package"]
    DEL_04_413_Update_Financing_Package["{DEL}04.413 Update Financing Package"]
    DEL_04_411_Create_Financing_Package["{DEL}04.411 Create Financing Package"]
    Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    External_Component["External Component"]
    UpdateFinancingPackage_validation_rules -->|unnamed| MOD_FinancingPackageValues_validation_rules
    DEL_04_417_Cancel_Financing_Package -->|unnamed| CancelFinancingPackage_validation_rules
    GetFinancingPackage_search_filter -->|unnamed| GetVersionedEntity_search_filter
    GetFinancingPackageRequest_validation_rules -->|unnamed| GetVersionedEntityCriterionValue_validation_rules
    DEL_04_412_Get_Financing_Package -->|unnamed| GetFinancingPackageRequest_validation_rules
    CreateFinancingPackage_validation_rules -->|unnamed| MOD_FinancingPackageValues_validation_rules
    DEL_04_413_Update_Financing_Package -->|unnamed| UpdateFinancingPackage_validation_rules
    DEL_04_414_Activate_Financing_Package -->|unnamed| ActivateFinancingPackage_validation_rules
    DEL_04_411_Create_Financing_Package -->|unnamed| CreateFinancingPackage_validation_rules
    DEL_04_412_Get_Financing_Package -->|unnamed| GetFinancingPackage_search_filter
    External_Component -->|unnamed| DEL_04_417_Cancel_Financing_Package
    External_Component -->|unnamed| DEL_04_412_Get_Financing_Package
    External_Component -->|unnamed| DEL_04_413_Update_Financing_Package
    External_Component -->|unnamed| n_04_419_Calculate_Subvention
    External_Component -->|unnamed| DEL_04_418_Get_Subvention_Scheme
    External_Component -->|unnamed| DEL_04_411_Create_Financing_Package
    External_Component -->|unnamed| DEL_04_415_Get_Financing_Package_Code_Lists
    External_Component -->|unnamed| DEL_04_414_Activate_Financing_Package
```
