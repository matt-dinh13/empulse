---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1224425
diagrams: 7
connections: 11
tags:
  - requirement
  - modules
---

# 📋 Get OBS contract identification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- HoSel contract identifier


Output:

	
- OBS contract code


Algorithm:

	
- System tries to find a record in ContractIdTranslation where Code = passed 'HoSel contract identifier'.
	
- System returns:
- 'HoSel contract identifier' in case that no record is found 
- Value of found record otherwise

## 🔗 Connections (11)

- ← Dependency: [[Processing SaleContractRequest]]
- ← Dependency: [[{MOD}Processing ContractFullInfoRequest message]]
- ← Dependency: [[Processing ArtificialIncomingPaymentRequest]]
- ← Dependency: [[Processing PairedPaymentInfoDto]]
- ← Dependency: [[Processing InstalmentMessageDto]]
- ← Dependency: [[Processing CELInstallmentScheduleRequest]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]
- ← Dependency: [[Processing CELInsuranceAccountTransaction]]
- ← Dependency: [[Processing CELFeeAccountTransaction]]
- ← Dependency: [[Processing CELPrincipalAccountTransaction]]
- ← Dependency: [[{MOD}Processing OutgoingPaymentDto]]

## 📊 Appears In (7 diagrams)

- Custom: Account Transactions - Business rules
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Business rules
- Custom: COMMON for CBSA - Business rules
- Custom: Contract - Business rules
- Custom: Incoming payments - Business rules
- Custom: Installment schedule - Business rules
