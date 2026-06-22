---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Business Rules"
domain: "Analysis Model"
element_id: 1758515
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Evaluate and set provider for DDM draft

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM processing via REST API/Business Rules

## 📝 Notes

This object describes the steps, how system evaluates and sets the applicable provider for the direct debit mandate draft.

Input:

	
- DirectDebitMandateDraft = object of respective direct debit mandate draft (DDM_Draft)


Steps:

	
- System takes the DirectDebitMandateDraft (DDM_Draft) from the input and checks whether all the following conditions are met or not:
   - Direct debit mandate is of a Standard type (i.e. DDM_Draft.DDM_Type = 'STANDARD').
   - Synchronization code of the bank branch maintaining the bank account to be used for the direct debit mandate processing is known (i.e. DDM_Draft.Bank_Branch_Sync_Code is not null).
If one or more of these conditions is/are not met, then algorithm ends.
	
- System checks the configuration of the bank associated with the bank branch maintaining the bank account to be used for the direct debit mandate processing and proceeds accordingly as follows:

   2.1.  In case the direct debit type of the bank is set to Direct Debit (i.e. Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code]->Bank.DD_Type = 'DD'), then system removes the direct debit mandate's reference to any particular ECS provider (i.e. sets DDM_Draft.ECS_Provider to null) if needed and algorithm ends. //Bank identified by the corresponding Bank.DD_Provider_ID will be used as a direct debit provider for clearing of the direct debit mandate's regular payments (while no ECS provider is involved at all) in such case.

   2.2.  In case the global parameter API_FOR_SETTING_ECS_PARTNER = TRUE and any JFS Partner is defined for the processed direct debit mandate draft (i.e. any DDM_Draft->DDM_JFS_Partner exists), then system sets the ECS provider for the processed direct debit mandate draft (DDM_Draft.ECS_Provider) according to the rule Setting of ECS partner on DDM for JL API with following parameters on the input:
      - BankBranchCode = DDM_Draft.Bank_Branch_Sync_Code
      - BankBranchSecondaryCode = Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code].MICR
      - BankCode = Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code]->Bank.Code
      - BankName = Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code]->Bank.Name
      - BankDDProvider = Bank[.ID=BankBranch->Bank.DD_Provider_ID].Code //Where BankBranch is identified based on the value of DDM_Draft.Bank_Branch_Sync_Code
      - BankDDproviderType = Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code]->Bank.DD_Type
      - CoLendingPartner = DDM_Draft->DDM_JFS_Partner.Code
Then algorithm ends (in case of failure, system returns the respective error to the calling object).

   2.3.  In case any ECS provider is already set on the direct debit mandate (i.e. DDM_Draft.ECS_Provider is not null) and its type is matching the bank's configuration of the applicable direct debit type (i.e. Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code]->Bank.DD_Type = DDM_Draft.ECS_Provider->ECS_Provider.ECS_Provider_Type) and the weight of such ECS provider is greater than 0 (i.e. DDM_Draft.ECS_Provider->ECS_Provider.Weight > 0), then algorithm ends. //i.e. the currently set ECS provider stays unchanged.

   2.4.  In case the global parameter USE_ECS_FROM_PREV_DDM = TRUE and code of the contract, which the direct debit mandate draft is associated to, is known (i.e. DDM_Draft.Contract_Code is not null), then system checks whether any direct debit mandate has been already created for the corresponding contract before (i.e. any Contract[.Contract_Code=DDM_Draft.Contract_Code]->DDM exists (no matter the DDM.Status)) or not.
If found and the bank's configuration of the applicable direct debit type for any of the contract's previous direct debit mandates is matching the bank's configuration for the processed direct debit mandate draft (i.e. Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code]->Bank.DD_Type = Contract->DDM[previous]->Bank_Account->Bank_Branch->Bank.DD_Type) and the weight of such ECS provider is greater than 0 (i.e. Contract->DDM[previous].ECS_Provider->ECS_Provider.Weight > 0), then system uses the same ECS provider also on the processed direct debit mandate draft (i.e. sets its code into DDM_Draft.ECS_Provider) and algorithm ends.

   2.5.  System selects the applicable ECS provider according to the algorithm ALG_ECS_PROVIDER (with ECSProviderType = Bank_Branch[.Synchronization_Code=DDM_Draft.Bank_Branch_Sync_Code]->Bank.DD_Type on the input) and sets its code into DDM_Draft.ECS_Provider.
In case of failure (i.e. when any error is returned on the rule's output), system returns the respective error to the calling object.
.
	
- Algorithm ends.

## 🔗 Connections (4)

- → Dependency: [[Setting of ECS partner on DDM for JL API (Requirement 1369973)]]
- → Dependency: [[{MOD}ALG_ECS_PROVIDER]]
- ← Dependency: [[14.434 PUT DDMOrDraft (Update direct debit mandate or direct debit mandate draft) (UseCase 1817867)]]
- ← Dependency: [[14.433 POST Draft (Create direct debit mandate draft) (UseCase 1817866)]]

## 📊 Appears In (1 diagrams)

- Custom: DDM processing via REST API - Business Rules
