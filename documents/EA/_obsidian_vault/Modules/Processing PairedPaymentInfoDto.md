---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments"
domain: "Modules"
element_id: 1224186
diagrams: 6
connections: 8
tags:
  - requirement
  - modules
---

# 📋 Processing PairedPaymentInfoDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments

## 📝 Notes

Input:

	
- PairedPaymentInfoDto


Algorithm:
If PairedPaymentInfoDto->InstallmentScheduleInfoRequest.contractStatus = H, the algorithm ends (no error is logged).

System creates a record in the comm table INSTALPAY124 with the following parameters for each PairedInstallmentPartDto referenced from PairedPaymentInfoDto.pairedInstallmentParts:

	
- Id = automatically generated unique identifier of the record
	
- Id credit = according to the rule Get OBS contract identification, passed is PairedPaymentInfoDto.contractCode
	
- Id installment = PairedInstallmentPartDto.installmentPartDataExchangeId
	
- Date pay = PairedPaymentInfoDto.depositDate
	
- Id payment = according to the rule Get OBS paired payment ID, passed is PairedPaymentInfoDto.paymentDataExchangeID
	
- Source =  according to the rule IncomingPaymentSourceSystem to HoSel value mapping, passed is PaymentPairingRequest.sourceSystem
	
- Type inform = if PairedPaymentInfoDto.typeOfOperation = PAIRED, then I - Insert; otherwise C - Cancel
	
- Value pay = PairedInstallmentPartDto.pairedAmount   ...negative amount if PairedPaymentInfoDto.typeOfOperation = UNPAIRED
	
- Result code = null
	
- Time stamp = current
	
- Id result190 = null

## 🔗 Connections (8)

- ← Dependency: [[PaymentPairingInfoDto]]
- → Dependency: [[Get OBS paired payment ID]]
- → Dependency: [[REQ#3 Message INSTALPAY124 (closed-end loan)]]
- → Dependency: [[Get OBS contract identification]]
- → Dependency: [[REQ#4 Add paymentSource to the INSTALPAY 124 messages]]
- → Dependency: [[REQ#1 Payment ID transaltion]]
- → Dependency: [[IncomingPaymentSourceSystem to HoSel value mapping]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]

## 📊 Appears In (6 diagrams)

- Custom: BRR-2204 - OBS interface - Incoming payments
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: BRR-3487 - Mapping of OBS payment ID to Homer ID
- Custom: IAKZ-631 - Not sending instalpay124 with current contract status H to OBS
- Custom: Incoming payments - Business rules
- Logical: CEL Payment Pairing - Communication Model
