---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments"
domain: "Modules"
element_id: 821263
diagrams: 1
connections: 13
tags:
  - requirement
  - modules
---

# 📋 REQ#7 Translate contract codes to contract DB ID for migrated contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments

## 📝 Notes

New elements:

	
- ContractIdTranslation
	
- business rules 'Get HoSel contract code' and 'Get OBS contract code'


New business rules are used on each place where is used attribute IdCredit. 

Data migration:
For all contracts to migrate from Homer must be added records into ContractIdTranslation:

	
- ContractIdTranslation.Code = Contract.Code
	
- ContractIdTranslation.Value = DB ID of a contract

## 🔗 Connections (12)

- ← Dependency: [[Processing SaleContractRequest]]
- ← Dependency: [[{MOD}Processing ContractFullInfoRequest message]]
- ← Dependency: [[Generating SaleContractResponse]]
- ← Dependency: [[Generating ContractCreditAccountRequest message]]
- ← Dependency: [[Generating RefundPaymentRequest]]
- ← Dependency: [[Processing ArtificialIncomingPaymentRequest]]
- ← Dependency: [[Generating IncomingPaymentRequest]]
- ← Dependency: [[Processing PairedPaymentInfoDto]]
- ← Dependency: [[Processing CELInstallmentScheduleRequest]]
- ← Dependency: [[Get HoSel contract code]]
- ← Dependency: [[Get OBS contract identification]]
- ← Dependency: [[{MOD}Processing OutgoingPaymentDto]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
