---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)"
domain: "Modules"
element_id: 1148239
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Generating SaleContractResponse

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)

## 📝 Notes

Input:

	
- a record in RESULT190 where TypeMessage = 170


Algorithm:

	
- 1. System finds a JMS Message Result Code according to the rule Determinate a result code for output JMS message from RESULT190 (passed is RESULT190.ResultCode and SaleContractResponse as a JMS message name).

	
- System creates a message containing a IncomingPaymentRequest object with the following parameters:
- contractCode = according to the rule Get HoSel contract code, passed is RESULT190.IdRecord ->SECCREDIT170.IdCredit
- resultCode = ResultEnum.Code

## 🔗 Connections (6)

- ← Dependency: [[Process RESULT190 record]]
- → Dependency: [[REQ#2 Message SECCREDIT170]]
- → Dependency: [[REQ#5 Update SECCREDIT170 message]]
- → Dependency: [[Determinate a result code for output JMS message from RESULT190]]
- → Dependency: [[Get HoSel contract code]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2205 - OBS interface - Operations on contract (CEL)
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Business rules
- Custom: Contract - Business rules
- Logical: Contract sale - Communication model
