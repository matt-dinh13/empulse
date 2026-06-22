---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules"
domain: "Analysis Model"
element_id: 1817918
diagrams: 4
connections: 13
tags:
  - requirement
  - analysis-model
---

# 📋 Check and update provider on DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules

## 📝 Notes

This object describes the steps, how system evaluates and sets the applicable provider for the direct debit mandate.

Input:

	
- DirectDebitMandate = object of respective direct debit mandate (DDM)


Steps:
//Original description has been corrected according to the actual implementation, rephrased for better readability and global parameter USE_ECS_FROM_PREV_DDM has been incorporated into the logic (instead of the country-specific implementation of step 2.5).

	
- System takes the DirectDebitMandate (DDM) from the input and checks whether all the following conditions are met or not:
   - Direct debit mandate is of a Standard type (i.e. DDM.DDM_Type = 'STANDARD').
   - Bank maintaining the bank account to be used for the direct debit mandate processing is known (i.e. DDM->Bank_Account->Bank_Branch->Bank exists).
If one or more of these conditions is/are not met, then algorithm ends.
	
- System checks the configuration of the bank maintaining the bank account to be used for the direct debit mandate processing and proceeds accordingly as follows:

   2.1.  In case the direct debit type of the bank is set to Direct Debit (i.e. DDM->Bank_Account->Bank_Branch->Bank.DD_Type = 'DD'), then system performs the following steps:
      - System removes the direct debit mandate's reference to any particular ECS provider (i.e. sets DDM.ECS_Provider to null) if needed.
      - System sets the direct debit provider for the processed direct debit mandate based on the bank's settings (i.e. sets DDM.DD_Provider = DDM->Bank_Account->Bank_Branch->Bank.DD_Provider).
   Then algorithm ends.

   2.2.  In case the global parameter API_FOR_SETTING_ECS_PARTNER = TRUE and any JFS Partner is defined for the processed direct debit mandate (i.e. any DDM->DDM_JFS_Partner exists), then system performs the following steps:
      2.2.2.  System removes the direct debit mandate's reference to any particular direct debit provider (i.e. sets DDM.DD_Provider to null) if needed.
      2.2.2.  System sets the ECS provider for the processed direct debit mandate (DDM.ECS_Provider) according to the rule Setting of ECS partner on DDM for JL API with following parameters on the input:
         - BankBranchCode = DDM->Bank_Account->Bank_Branch.Synchronization_Code
         - BankBranchSecondaryCode = DDM->Bank_Account->Bank_Branch.MICR
         - BankCode = DDM->Bank_Account->Bank_Branch->Bank.Code
         - BankName = DDM->Bank_Account->Bank_Branch->Bank.Name
         - BankDDProvider = Bank[.ID=DDM->Bank_Account->Bank_Branch->Bank.DD_Provider_ID].Code
         - BankDDproviderType = DDM->Bank_Account->Bank_Branch->Bank.DD_Type
         - CoLendingPartner = DDM->DDM_JFS_Partner.Code
      Then algorithm ends (in case of failure, system returns the respective error to the calling object).

   2.3.  System removes the direct debit mandate's reference to any particular direct debit provider (i.e. sets DDM.DD_Provider to null) if needed. //As some ECS provider to be used for clearing of the direct debit mandate's regular payments is going to be selected in the following steps and no direct debit provider (represented by some bank) will be involved in such case.

   2.4.  In case any ECS provider is already set on the direct debit mandate (i.e. DDM.ECS_Provider is not null) and its type is matching the bank's configuration of the applicable direct debit type (i.e. DDM->Bank_Account->Bank_Branch->Bank.DD_Type = DDM.ECS_Provider->ECS_Provider.ECS_Provider_Type) and the weight of such ECS provider is greater than 0 (i.e. DDM.ECS_Provider->ECS_Provider.Weight > 0), then algorithm ends. //i.e. the currently set ECS provider stays unchanged.

   2.5.  In case the global parameter USE_ECS_FROM_PREV_DDM = TRUE, then system checks whether any other direct debit mandate has been already created for the contract, which the processed direct debit mandate is associated to, before (i.e. any Contract[.ID=DDM[DirectDebitMandate].Contract_ID]->DDM[previous] exists (no matter the DDM.Status)) or not.
   If found and the bank's configuration of the applicable direct debit type for any of the contract's previous direct debit mandates is matching the bank's configuration for the processed direct debit mandate (i.e. DDM->Bank_Account->Bank_Branch->Bank.DD_Type = Contract->DDM[previous]->Bank_Account->Bank_Branch->Bank.DD_Type) and the weight of such ECS provider is greater than 0 (i.e. Contract->DDM[previous].ECS_Provider->ECS_Provider.Weight > 0), then system uses the same ECS provider also on the processed direct debit mandate (i.e. sets its code into DDM.ECS_Provider) and algorithm ends.

   2.6.  System selects the applicable ECS provider according to the algorithm ALG_ECS_PROVIDER (with ECSProviderType = DDM->Bank_Account->Bank_Branch->Bank.DD_Type on the input) and sets its code into DDM.ECS_Provider.
   In case of failure (i.e. when any error is returned on the rule's output), system returns the respective error to the calling object.
.
	
- Algorithm ends.

## 🔗 Connections (13)

- ← Dependency: [[{MOD}01.425 Update DDM]]
- ← Dependency: [[01.420 Create DDM on the contract]]
- ← Dependency: [[{MOD}01.430 Receive DDM]]
- ← Dependency: [[14.434 PUT DDMOrDraft (Update direct debit mandate or direct debit mandate draft) (UseCase 1817867)]]
- ← Dependency: [[14.432 POST DDM (Create and validate direct debit mandate) (UseCase 1817863)]]
- → Dependency: [[{MOD}ALG_ECS_PROVIDER]]
- → Dependency: [[REQ#4 - Take eMandete flag into account during create_update DDM via UI]]
- → Dependency: [[{MOD}ALG_ECS_PROVIDER]]
- → Dependency: [[Setting of ECS partner on DDM for JL API (Requirement 1369973)]]
- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- ← Dependency: [[{MOD}01.422 Update application DDM]]
- ← Dependency: [[{MOD}14.421 Create DDM via WS]]
- ← Dependency: [[{MOD}14.422 Update DDM via WS]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Use Case: Create/Update/Receive DDM
- Use Case: DDM via WS
