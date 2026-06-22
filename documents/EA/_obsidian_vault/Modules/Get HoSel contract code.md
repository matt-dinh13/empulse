---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments"
domain: "Modules"
element_id: 1224428
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Get HoSel contract code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments

## 📝 Notes

Input:

	
- OBS contract identifier


Output:

	
- HoSel contract code


Algorithm:

	
- System tries to find a record in ContractIdTranslation where Value = passed 'OBS contract identifier'.
	
- System returns:
- 'OBS contract identifier' in case that no record is found 
- Code of found record otherwise

## 🔗 Connections (5)

- ← Dependency: [[Generating SaleContractResponse]]
- ← Dependency: [[Generating ContractCreditAccountRequest message]]
- ← Dependency: [[Generating RefundPaymentRequest]]
- ← Dependency: [[Generating IncomingPaymentRequest]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: COMMON for CBSA - Business rules
- Custom: Contract - Business rules
- Custom: Incoming payments - Business rules
- Custom: Refunds - Business rules
